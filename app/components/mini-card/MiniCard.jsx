import Image from "next/image"
import Link from "next/link"
import style from './miniCard.module.css'

export default function MiniCard(props) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <Image className={style.cardImage} src={props.image} alt={props.altText}/>
      </div>
        <div className={style.textContainer}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Link className="link" href="/programs">Learn More</Link>
        </div>
    </div>
  )
}
