import style from './globalCheer.module.css'
import Link from 'next/link'
import { documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"

const RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node,children) => {
      return <ul className={style.bullets}>{children}</ul>
    },
    [BLOCKS.HEADING_3]: (node,children) => {
      return <h3>{children}</h3>
    },
    [BLOCKS.PARAGRAPH]: (node,children) => {
      return <p>{children}</p>
    }
  },
  
  }


export default function PricingCard(props) {
 const content = props.content
 
  
  return (
    <section className={`${style.container} ${props.className} `}>
            <h2 className={style.cardTitle}>{content.title}</h2>
            <p className={style.info}>{content.priceInfo}</p>
            <div  className={style.textContainer}>
              {documentToReactComponents(content.details.json,RICH_TEXT_OPTIONS)}
            <Link className ={style.button} href='/contact'>Contact Us</Link>
            </div>
    </section>
    
  )

}