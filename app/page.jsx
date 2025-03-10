import About from "./sections/about/About";
import Instagram from "./sections/instagramGrid/Instagram"
import Hero from "./sections/hero/Hero";
import Partners from "./sections/partners/Partners";
import Programs from "./sections/programs/Programs"
import { getHero, getAbout } from "./lib/contentful";
import { draftMode } from "next/headers"
import { ContentfulPreviewProvider } from "./api/contentful-preview/previewAPI";


export const dynamic = "force-dynamic";

export default async function Home() {
  const {isEnabled} = await draftMode()
 

  let HeroData = null;
  let AboutData = null;

  try {
    HeroData = await getHero("1DAm1YnETUcalNhWN8QZyr", isEnabled);
    if (!HeroData) {
      console.warn("⚠️ HeroData is undefined or null.");
    }
  } catch (error) {
    console.error("❌ Error fetching HeroData:", error);
  }

  try {
    AboutData = await getAbout("7HJSjxt0IjbdMYZriaEmXA", isEnabled);
    if (!AboutData) {
      console.warn("⚠️ AboutData is undefined or null.");
    }
  } catch (error) {
    console.error("❌ Error fetching AboutData:", error);
  }
  return (

    <main>
      <ContentfulPreviewProvider
      locale="ja"
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
      debugMode={isEnabled}
      targetOrigin="https://app.contentful.com"
      >
      <Hero  data={HeroData}/>
      <About  data={AboutData}/>
      <Instagram/>
      <Programs/>
      <Partners/>
      </ContentfulPreviewProvider>
    </main>

  )
}
