'use client'

import Link from 'next/link'
import style from './hero.module.css'
import Image from 'next/image'
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

export default function Hero({data}) {
  
  const updatedData = useContentfulLiveUpdates(data);

 
  return (
   
    <section className={style.container}>
    <header className={style.textContainer}>
      <h1 className={style.title}>{updatedData.title}</h1>
      <Link className="link" href="#about"> Learn More </Link>
    </header>
    <div className={style.imageContainer}>
      {updatedData.imagesCollection.items.map((item) => (
        <Image key={item.sys.id} className={style.image} src={item.url} alt={item.title} width={item.width} height={item.height} ></Image>
      ))}
        
    </div>
    </section>
  )
}
