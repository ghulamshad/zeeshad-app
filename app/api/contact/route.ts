import { NextResponse } from 'next/server';
import { validateEmail } from '@/lib/utils';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
};

const recentByIp = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip') || 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const stamps = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (stamps.length >= RATE_MAX) {
    recentByIp.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  recentByIp.set(ip, stamps);
  return false;
}

async function forwardEmail(payload: {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}): Promise<'sent' | 'skipped' | 'failed'> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_NOTIFY_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'ZeeShad Website <onboarding@resend.dev>';

  if (!apiKey || !to) return 'skipped';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `[ZeeShad] ${payload.service || 'Inquiry'} — ${payload.name}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Company: ${payload.company || '—'}`,
          `Phone: ${payload.phone || '—'}`,
          `Service: ${payload.service}`,
          '',
          payload.message,
        ].join('\n'),
      }),
    });
    if (!res.ok) {
      console.error('[contact] resend failed', await res.text());
      return 'failed';
    }
    return 'sent';
  } catch (err) {
    console.error('[contact] resend error', err);
    return 'failed';
  }
}

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    // Honeypot: bots fill hidden "website" field
    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const service = body.service?.trim();

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, service and message are required.' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Enter a valid email address.' }, { status: 400 });
    }

    if (message.length > 8000 || name.length > 200) {
      return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 400 });
    }

    const record = {
      name,
      email,
      company: body.company?.trim() ?? '',
      phone: body.phone?.trim() ?? '',
      service,
      message,
    };

    const delivery = await forwardEmail(record);

    console.info('[contact]', {
      name: record.name,
      email: record.email,
      company: record.company,
      phone: record.phone,
      service: record.service,
      messageLength: message.length,
      delivery,
      at: new Date().toISOString(),
    });

    // Accept the lead even if email provider is not configured (logged server-side).
    // Fail only when a provider is configured and delivery fails.
    if (delivery === 'failed') {
      return NextResponse.json(
        {
          ok: false,
          error: 'We could not deliver your message. Please email info@zeeshad.com directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivery });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}
