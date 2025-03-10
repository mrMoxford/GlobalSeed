import { getHero } from '../../lib/contentful'; 
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';


export async function GET(request) {
 

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const heroId = searchParams.get('id');
  

  if (!secret || !heroId ) {
    return new Response('Missing parameters', { status: 400 });
  }

 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
 
 
  const hero = await getHero(heroId, true); 
  

  if (!hero) {
    return new Response('Hero module not found', { status: 404 });
  }
  

  const draft = await draftMode();
  draft.enable();




  
  
  redirect("/");
 
}
