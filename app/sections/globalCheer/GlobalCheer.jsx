'use client'
import style from './globalCheer.module.css'
import Link from 'next/link'
import { documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import { useContentfulLiveUpdates} from "@contentful/live-preview/react";



 export default function GlobalCheer(props) {
 const content = props.content
  const updatedContent = useContentfulLiveUpdates(content);

  

  const RICH_TEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node,children) => {
        return <ul className={style.bullets}>{children}</ul>
      },
      [BLOCKS.HEADING_3]: (node,children) => {
        return <h3>{children} </h3>
      },
      [BLOCKS.PARAGRAPH]: (node,children) => {
        return <p>{children} </p>
      }
    },
    
    }
  return (
    <section className={`${style.container} ${props.className} `}>
            <h2 className={style.cardTitle}></h2>
            <p className={style.info}></p>
            <div  className={style.textContainer}>
              {documentToReactComponents(updatedContent.details.json,RICH_TEXT_OPTIONS)}
            <Link className ={style.button} href='https://app.jibun-apps.jp/form/6c99f0e1-88ee-4f79-ad95-6d1f329c5d7d/new' target='_blank'>Contact Us</Link>
            </div>
    </section>
  )

}
