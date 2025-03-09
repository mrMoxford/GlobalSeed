import { getAbout } from '@/app/lib/contentful';

export async function fetchData(isEnabled) {
    // Replace "7HJSjxt0IjbdMYZriaEmXA" with the appropriate ID for the About page
    const data = await getAbout("7HJSjxt0IjbdMYZriaEmXA", isEnabled);
    return data;
  }