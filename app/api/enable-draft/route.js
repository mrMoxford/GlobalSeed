import { getAllProgrammes } from "../../lib/contentful";
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const bypass = searchParams.get('x-vercel-protection-bypass');

  // Validate presence of required parameters
  if (!secret) {
    return new Response('Missing secret parameter', { status: 400 });
  }

  // Validate secret
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid secret token', { status: 401 });
  }

  // Fetch program data
  const programmes = await getAllProgrammes(3, true);

  // Ensure there are valid programs
  if (!Array.isArray(programmes) || programmes.length === 0) {
    return new Response('No programs found', { status: 404 });
  }

  // Enable Draft Mode
  (await draftMode()).enable();

  // Manually override cookie for live-preview support
  const cookieStore = await cookies();
  const prerenderCookie = cookieStore.get('__prerender_bypass');

  if (prerenderCookie) {
    cookieStore.set({
      name: '__prerender_bypass',
      value: prerenderCookie.value,
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'none',
    });
  }

  // Redirect to the preview page with the bypass token
  redirect(
    `/programs/?x-vercel-protection-bypass=${bypass}&x-vercel-set-bypass-cookie=samesitenone`
  );
}
