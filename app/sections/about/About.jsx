'use client'

import style from './about.module.css'
import Image from 'next/image'
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";


export default  function About({data}) {
 
  const updatedData = useContentfulLiveUpdates(data);
  

  
  
  return (
 
    <section id="about" className={style.aboutContainer}>
      <div className={style.imageContainer}>
        <Image className={style.image} src={updatedData.image.url} alt={updatedData.image.title} height={updatedData.image.height} width={updatedData.image.width}></Image>
      </div>
      <div className={style.textContainer} >
        <h2 className={style.title}>
        {updatedData.title}
        
        </h2>
        <p>
         {updatedData.discription}
      
        </p>
      </div>
    </section>
   
  )
}



