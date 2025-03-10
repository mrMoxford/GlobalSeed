// / app/api/preview/route.js (or any other relevant API route in your Next.js App)
import { getProgram } from '../../lib/contentful'; // Adjust the path accordingly
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = "force-dynamic";

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const programId = searchParams.get('id'); // Use a unique ID for the program

  if (!secret || !programId) {
    return new alert('Missing parameters', { status: 400 });
  }

  // Validate the secret (ensure this is your Contentful preview secret)
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new alert('Invalid token', { status: 401 });
  }

  // Fetch the program based on the ID to check if it exists
  const program = await getProgram(programId, true); // Use program ID to fetch the program

  if (!program) {
    return new alert('Program not found', { status: 404 });
  }

  // Enable Draft Mode to fetch the preview content
  draftMode().enable();

  const cookieStore = cookies();
  const cookie = cookieStore.get('__prerender_bypass');
  cookies().set({
    name: '__prerender_bypass',
    value: cookie?.value,
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });

  
  redirect(`/programs?id=${programId}`);
 
}
