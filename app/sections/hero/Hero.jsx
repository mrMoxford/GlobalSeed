'use client'

import Link from 'next/link'
import style from './hero.module.css'
import Image from 'next/image'
import { useContentfulLiveUpdates, useContentfulInspectorMode } from "@contentful/live-preview/react";
import { ContentfulPreviewProvider } from "../../api/contentful-preview/previewAPI";
export default function Hero({data,isEnabled}) {
  
  const updatedData = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id});
  return (
    <ContentfulPreviewProvider
    locale="en-US"
    enableInspectorMode={isEnabled}
    enableLiveUpdates={isEnabled}
    debugMode={isEnabled}
    targetOrigin="https://app.contentful.com"
  >
    <section className={style.container}>
    <header className={style.textContainer}>
      <h1 className={style.title}>{updatedData.title} {inspectorProps({fieldId: "title" })}</h1>
      <Link className="link" href="#about"> Learn More </Link>
    </header>
    <div className={style.imageContainer}>
      {updatedData.imagesCollection.items.map((item) => (
        <Image key={item.sys.id} className={style.image} src={item.url} alt={item.title} width={item.width} height={item.height} ></Image>
      ))}
        
    </div>
    </section>
    </ContentfulPreviewProvider>
  )
}
