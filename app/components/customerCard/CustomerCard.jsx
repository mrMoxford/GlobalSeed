import style from "./customerCard.module.css"

import Image from "next/image"

export default function CustomerCard(props) {
  return (
    <article className={style.cardGrid}>
        <Image className={style.image} src={props.image} alt="customer-avatar"/>
        <div className={style.title}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
        <p className={style.text}>{props.text}</p>
    </article>
  )
}
