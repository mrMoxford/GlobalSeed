import { draftMode } from 'next/headers';

export async function GET(request) {
  draftMode().disable();
  return new Response('Draft mode is disabled', { status: 200 });

}