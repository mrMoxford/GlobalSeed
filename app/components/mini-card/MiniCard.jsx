'use client'

import Image from "next/image"
import Link from "next/link"
import style from './miniCard.module.css'
import { useContentfulLiveUpdates} from "@contentful/live-preview/react";
export default function MiniCard(props) {
  const content = props.content
  const updatedContent = useContentfulLiveUpdates(content);

 ;
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <Image 
        className={style.cardImage} 
        src={updatedContent.cardImage.url} 
        alt={updatedContent.cardImage.title} 
        width={updatedContent.cardImage.width} 
        height={updatedContent.cardImage.height}/>
      </div>
        <div className={style.textContainer}>
            <h3>{updatedContent.cardTitle} </h3>
            <p>{updatedContent.details} </p>
            <Link className="link" href="/programs">Learn More</Link>
        </div>
    </div>
  )
}