

import Link from 'next/link'
import style from './hero.module.css'
import Image from 'next/image'
import image1 from "../../../public/ParkAdventure5.jpeg"
import image2 from "../../../public/ParkAdventure3.jpeg"
import image3 from "../../../public/ParkAdventure2.jpeg"
import image4 from "../../../public/ParkAdventure1.jpeg"
export default function Hero() {
  return (
    <section className={style.container}>
    <header className={style.textContainer}>
      <h1 className={style.title}>connecting the world through sports</h1>
      <p className={style.text}>We help talented athletes secure international University scholarships. </p>
      <Link className="link" href="#about"> Learn More </Link>
    </header>
    <div className={style.imageContainer}>
        <Image className={style.image} src={image1} alt="hero-img-1"></Image>
        <Image className={style.image} src={image2} alt="hero-img-2"></Image>
        <Image className={style.image} src={image3} alt="hero-img-3"></Image>
        <Image className={style.image} src={image4} alt="hero-img-4"></Image>
        
    </div>
    </section>
  )
}
