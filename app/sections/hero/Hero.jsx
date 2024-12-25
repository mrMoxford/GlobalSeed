

import Link from 'next/link'
import style from './hero.module.css'
import Image from 'next/image'
import { getHero } from '@/app/lib/contentful'
const data = await getHero("1DAm1YnETUcalNhWN8QZyr", false)
export default function Hero() {
  
  return (
    <section className={style.container}>
    <header className={style.textContainer}>
<<<<<<< HEAD
      <h1 className={style.title}>Connecting the world through sports and English </h1>
      <p className={style.text}>  </p>
=======
      <h1 className={style.title}>{data.title}</h1>
>>>>>>> 705a3e1 (cms updates)
      <Link className="link" href="#about"> Learn More </Link>
    </header>
    <div className={style.imageContainer}>
      {data.imagesCollection.items.map((item) => (
        <Image key={item.sys.id} className={style.image} src={item.url} alt={item.title} width={item.width} height={item.height}></Image>
      ))}
        
    </div>
    </section>
  )
}
