import Image from "next/image"
import Link from "next/link"
import style from './miniCard.module.css'

export default function MiniCard(props) {
  const content = props.content
  
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <Image className={style.cardImage} src={content.cardImage.url} alt={content.cardImage.title} width={content.cardImage.width} height={content.cardImage.height}/>
      </div>
        <div className={style.textContainer}>
            <h3>{content.cardTitle}</h3>
            <p>{content.details}</p>
            <Link className="link" href="/programs">Learn More</Link>
        </div>
    </div>
  )
}
