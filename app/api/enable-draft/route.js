// app/api/preview/route.js (or any other relevant API route in your Next.js App)
import { getProgramme } from '../../lib/contentful'; // Adjust the path accordingly
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const bypass = searchParams.get('x-vercel-protection-bypass');
  const programId = searchParams.get('id'); // Use a unique ID for the program

  if (!secret || !programId) {
    return new Response('Missing parameters', { status: 400 });
  }

  // Validate the secret (ensure this is your Contentful preview secret)
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  // Fetch the program based on the ID to check if it exists
  const programme = await getProgramme(programId, true); // Use program ID to fetch the program

  if (!programme) {
    return new Response('Program not found', { status: 404 });
  }

  // Enable Draft Mode to fetch the preview content
  draftMode().enable();

  // Manually override cookie for live-preview support
  const cookie = cookies().get('__prerender_bypass');
  cookies().set('__prerender_bypass', cookie?.value, {
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });

  // Redirect to the fixed preview page, passing the program ID and any other necessary query params
  redirect(`/programs/?id=${programId}`);

}
