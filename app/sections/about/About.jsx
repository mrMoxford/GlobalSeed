'use client'

import style from './about.module.css'
import Image from 'next/image'
import { useContentfulLiveUpdates, useContentfulInspectorMode } from "@contentful/live-preview/react";
import { ContentfulPreviewProvider } from "../../api/contentful-preview/previewAPI";
export default function About({data,isEnabled}) {
  const updatedData = useContentfulLiveUpdates(data);
  

  const inspectorProps = useContentfulInspectorMode();
  
  return (
    <ContentfulPreviewProvider
    locale="en-US"
    enableInspectorMode={isEnabled}
    enableLiveUpdates={isEnabled}
    debugMode={isEnabled}
    targetOrigin="https://app.contentful.com"
  >
    <section id="about" className={style.aboutContainer}>
      <div className={style.imageContainer}>
        <Image className={style.image} src={updatedData.image.url} alt={updatedData.image.title} height={updatedData.image.height} width={updatedData.image.width}></Image>
      </div>
      <div className={style.textContainer} >
        <h2 className={style.title} {...inspectorProps({ entryId: updatedData.sys.id, fieldId: "title" })}>
        {updatedData.title}
        
        </h2>
        <p>
         {updatedData.discription}
         {inspectorProps({ entryId: updatedData.sys.id, fieldId: "discription" })}
        </p>
      </div>
    </section>
    </ContentfulPreviewProvider>
  )
}



