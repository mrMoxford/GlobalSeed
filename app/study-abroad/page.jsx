import style from "./studyAbroad.module.css"
import Link from "next/link"
import { getStudyAbroad } from "../lib/contentful"
import { documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"

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

const data = await getStudyAbroad("7zAb1BVOeKLYKiGqlD8yk2", false)

export default function StudyAbroad() {
  return (
    <section className={style.studyAbroad}>
      <div className={style.container}>
        <h1 className={style.title}>{data.title}</h1>
        <div>
          <p className={style.priceInfo}>{data.priceInfo}</p>
        </div>
        <div className={style.twoColumns}>
          <div className={style.column}>{documentToReactComponents(data.first.json,RICH_TEXT_OPTIONS)}</div>
          <div className={style.column}>{documentToReactComponents(data.second.json,RICH_TEXT_OPTIONS)}</div>
        </div>
        <Link className={style.button} href="/contact">Contact Us</Link>
      </div>
    </section>
  )
}
