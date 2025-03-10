// / app/api/preview/route.js (or any other relevant API route in your Next.js App)
import { getProgramme } from '../../lib/contentful'; // Adjust the path accordingly
import {  draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = "force-dynamic";

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
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
  const draft = await draftMode()
  draft.enable();

  

  
  redirect(`/programs?id=${programId}`);
 
}
