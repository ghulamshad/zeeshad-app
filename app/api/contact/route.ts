import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Persist / forward: wire to email provider (Resend, SendGrid) or CRM when ready.
    // For now we accept and log server-side so the live form is not a silent mock.
    console.info('[contact]', {
      name,
      email,
      company: body.company ?? '',
      phone: body.phone ?? '',
      service: body.service ?? '',
      messageLength: message.length,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}
