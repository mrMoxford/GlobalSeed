
import { getProgram } from '../../lib/contentful'; 
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';



export async function GET(request) {
 
 

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  // const bypass = searchParams.get('x-vercel-protection-bypass');
  const contentType = searchParams.get('type');
  const contentId = searchParams.get('id');
  

  if (!secret || !contentId) {
    return new Response('Missing parameters', { status: 400 });
  }

 
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
 
  const draft = await draftMode();
  draft.enable();

  let content;

  
  switch (contentType) {
    case 'programeCard':
      content = await getProgram(contentId, isEnabled); 
      
      return redirect(`/programs/${contentId}`);
    case 'about':
      content = await getAbout(contentId, isEnabled); 
      return redirect('/');
    case 'hero':
      content = await getHero(contentId, isEnabled); 
      return redirect('/');
    case 'programMiniCard':
      content = await getMiniCard(contentId, isEnabled); 
      return redirect('/');
    default:
      return new Response('Invalid content type', { status: 400 });
  }

  // // If content is not found, return a 404 error
  // if (!content) {
  //   return new Response('Content not found', { status: 404 });
  // }
 
  // const program = await getProgram(programId, true); 
  

  // if (!program) {
  //   return new Response('Program not found', { status: 404 });
  // }
  


  // const cookieStore = await cookies();
  // const cookie = cookieStore.get('__prerender_bypass');


  // cookieStore.set('__prerender_bypass', cookie?.value, {
  //   httpOnly: true,
  //   path: '/',
  //   secure: true,
  //   sameSite: 'none',
  // });

  
  // redirect(
  //   `/programs?${new URLSearchParams({
  //     id: programId,
  //     'x-vercel-protection-bypass': bypass || '',
  //     'x-vercel-set-bypass-cookie': 'samesitenone',
  //   }).toString()}`
  // );
 
}
