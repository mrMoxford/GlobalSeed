
'use server'

import About from "./sections/about/About";
import Instagram from "./sections/instagramGrid/Instagram"
import Hero from "./sections/hero/Hero";
import Partners from "./sections/partners/Partners";
import Programs from "./sections/programs/Programs"
import { getHero, getAbout } from "./lib/contentful";
import { draftMode } from "next/headers";
import { ContentfulPreviewProvider } from "./api/contentful-preview/previewAPI";



export default async function Home() {
const {isEnabled} = await draftMode()

const HeroData = await getHero("1DAm1YnETUcalNhWN8QZyr", isEnabled)

const AboutData = await getAbout("7HJSjxt0IjbdMYZriaEmXA", isEnabled)


  return (

    <main>
      <ContentfulPreviewProvider
      locale="en-US"
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
      debugMode={isEnabled}
      targetOrigin="https://app.contentful.com"
    >
      <Hero data={HeroData}/>
      <About data={AboutData}/>
      </ContentfulPreviewProvider>
      <Instagram/>
      <Programs/>
      <Partners/>
    </main>

  )
}
