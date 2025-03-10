import { getMiniCard } from '../../lib/contentful'; 
import {  draftMode } from 'next/headers';
import { redirect } from 'next/navigation';


export async function GET(request) {
 

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const miniId = searchParams.get('id');
  

  if (!secret || !miniId ) {
    return new Response('Missing parameters', { status: 400 });
  }

 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
 
 
  const mini = await getMiniCard(miniId, true); 
  

  if (!mini) {
    return new Response('Programs Mini module not found', { status: 404 });
  }
  

  const draft = await draftMode();
  draft.enable();



  
  redirect(
    "/"
  );
 
}
