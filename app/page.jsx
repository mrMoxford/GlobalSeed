import About from "./sections/about/About";
import Instagram from "./sections/instagramGrid/Instagram"
import Hero from "./sections/hero/Hero";
import Partners from "./sections/partners/Partners";
import Programs from "./sections/programs/Programs"

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Instagram/>
      <Programs/>
      <Partners/>
    </main>
  )
}
