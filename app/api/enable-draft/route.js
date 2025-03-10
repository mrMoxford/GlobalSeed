
import { getProgram } from '../../lib/contentful'; 
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';



export async function GET(request) {
 
 

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const programId = searchParams.get('id'); 

  if (!secret || !programId) {
    return new Response('Missing parameters', { status: 400 });
  }

 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

 
  const program = await getProgram(programId, true); 
  

  if (!program) {
    return new Response('Program not found', { status: 404 });
  }
  console.log("draft-enabled for:", program.title)
  // Enable Draft Mode to fetch the preview content
  draftMode().enable();

  
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
