import { getHero } from '@/app/lib/contentful';

export async function fetchData(isEnabled) {
    const data = await getHero("1DAm1YnETUcalNhWN8QZyr", isEnabled);
    return data;
  }