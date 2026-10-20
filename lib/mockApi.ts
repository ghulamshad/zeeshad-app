import type { ContactFormState } from '@/store/slices/contactSlice';

export async function submitContactApi(payload: ContactFormState): Promise<{ ok: boolean }> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error || 'Failed to submit');
  }

  return { ok: true };
}
