

import About from "./sections/about/About";
import Instagram from "./sections/instagramGrid/Instagram"
import Hero from "./sections/hero/Hero";
import Partners from "./sections/partners/Partners";
import Programs from "./sections/programs/Programs"
import { getHero, getAbout } from "./lib/contentful";
import { draftMode } from "next/headers";


export const dynamic = "force-dynamic";

export default async function Home() {
  const {isEnabled} = await draftMode()
 

  const HeroData = await getHero("1DAm1YnETUcalNhWN8QZyr", isEnabled)
  
  const AboutData = await getAbout("7HJSjxt0IjbdMYZriaEmXA", isEnabled)
  
  return (

    <main>
      <Hero isEnabled={isEnabled} data={HeroData}/>
      <About isEnabled={isEnabled} data={AboutData}/>
      <Instagram/>
      <Programs/>
      <Partners/>
    </main>

  )
}
