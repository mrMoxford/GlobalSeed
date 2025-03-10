import { getHero } from '../../lib/contentful'; 
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';


export async function GET(request) {
 

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const bypass = searchParams.get('x-vercel-protection-bypass');
  const heroId = searchParams.get('id');
  

  if (!secret || !heroId ) {
    return new Response('Missing parameters', { status: 400 });
  }

 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
 
 
  const hero = await getHero(heroId, true); 
  

  if (!hero) {
    return new Response('About info not found', { status: 404 });
  }
  

  const draft = await draftMode();
  draft.enable();

  const cookieStore = await cookies();
  const cookie = cookieStore.get('__prerender_bypass');


  cookieStore.set('__prerender_bypass', cookie?.value, {
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });

  
  redirect(
    `/${new URLSearchParams({
      id: heroId,
      'x-vercel-protection-bypass': bypass || '',
      'x-vercel-set-bypass-cookie': 'samesitenone',
    }).toString()}`
  );
 
}
