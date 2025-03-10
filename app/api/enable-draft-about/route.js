import { getAbout } from '../../lib/contentful'; 
import {  draftMode } from 'next/headers';
import { redirect } from 'next/navigation';


export async function GET(request) {
 
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  
  const aboutId = searchParams.get('id');
  
  if (!secret || !aboutId ) {
    return new Response('Missing parameters', { status: 400 });
  }
 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
 
  const about = await getAbout(aboutId, true); 

  if (!about) {
    return new Response('About info not found', { status: 404 });
  }

  const draft = await draftMode();
  draft.enable();

  
  redirect(
    "/"
  );
 
}
