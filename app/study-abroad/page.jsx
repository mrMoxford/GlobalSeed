import style from "./studyAbroad.module.css"
import Link from "next/link"
import { getStudyAbroad } from "../lib/contentful"
import { documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import { ContentfulPreviewProvider } from "../api/contentful-preview/previewAPI"
import { useContentfulLiveUpdates} from "@contentful/live-preview/react";
import { draftMode } from "next/headers"

const isEnabled = await draftMode()
const data = await getStudyAbroad("7zAb1BVOeKLYKiGqlD8yk2", isEnabled)

export default function StudyAbroad() {
  const RICH_TEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node,children) => {
        return <ul className={style.list}>
        {children}
      </ul>
      },
      [BLOCKS.HEADING_3]: (node,children) => {
        return <h3 className={style.heading}>{children}</h3>
      },
      [BLOCKS.HEADING_4]: (node,children) => {
        return <h4 className={style.heading}>{children}</h4>
      },
      [BLOCKS.PARAGRAPH]: (node,children) => {
        return <p>{children}</p>
      }
    },
    
    }
  const updatedContent = useContentfulLiveUpdates(data);
  return (
    <section className={style.studyAbroad}>
      <ContentfulPreviewProvider
      locale="en-US"
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
      debugMode={isEnabled}
      targetOrigin="https://app.contentful.com"
      >
      <div className={style.container}>
        <h1 className={style.title}>{updatedContent.title}</h1>
        <div>
          <p className={style.priceInfo}>{updatedContent.priceInfo}</p>
        </div>
        <div className={style.twoColumns}>
          <div className={style.column}>{documentToReactComponents(updatedContent.first.json,RICH_TEXT_OPTIONS)}</div>
          <div className={style.column}>{documentToReactComponents(updatedContent.second.json,RICH_TEXT_OPTIONS)}</div>
        </div>
        <Link className={style.button} href="https://app.jibun-apps.jp/form/6c99f0e1-88ee-4f79-ad95-6d1f329c5d7d/new">Contact Us</Link>
      </div>
      </ContentfulPreviewProvider>
    </section>
  )
}
