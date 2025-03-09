'use client'
import style from './globalCheer.module.css'
import Link from 'next/link'
import { documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import { useContentfulLiveUpdates, useContentfulInspectorMode } from "@contentful/live-preview/react";



 export default function GlobalCheer(props) {
 const content = props.content
  const updatedContent = useContentfulLiveUpdates(content);

  const inspectorProps = useContentfulInspectorMode();

  const RICH_TEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node,children) => {
        return <ul className={style.bullets}>{children} {...inspectorProps({ entryId: updatedContent.sys.id, fieldId: "details" })}</ul>
      },
      [BLOCKS.HEADING_3]: (node,children) => {
        return <h3>{children} {...inspectorProps({ entryId: updatedContent.sys.id, fieldId: "details" })}</h3>
      },
      [BLOCKS.PARAGRAPH]: (node,children) => {
        return <p>{children} {...inspectorProps({ entryId: updatedContent.sys.id, fieldId: "details" })}</p>
      }
    },
    
    }
  return (
    <section className={`${style.container} ${props.className} `}>
            <h2 className={style.cardTitle}>{updatedContent.title} {inspectorProps({ entryId: updatedContent.sys.id, fieldId: "title" })} </h2>
            <p className={style.info}>{updatedContent.priceInfo} {inspectorProps({ entryId: updatedContent.sys.id, fieldId: "priceInfo" })}</p>
            <div  className={style.textContainer}>
              {documentToReactComponents(updatedContent.details.json,RICH_TEXT_OPTIONS)}
            <Link className ={style.button} href='https://app.jibun-apps.jp/form/6c99f0e1-88ee-4f79-ad95-6d1f329c5d7d/new' target='_blank'>Contact Us</Link>
            </div>
    </section>
  )

}
