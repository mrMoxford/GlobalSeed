
import Image from "next/image"
import style from "./partners.module.css"
import uof from "../../../public/UOF.png"
import isu from "../../../public/LSU.png"
import upenn from "../../../public/UCD.png"
import osu from "../../../public/CC.png"
export default function Partners() {
  return (
    <section className={style.partnersContainer}>
        <h2 className={style.title}>our partners</h2>
        <div className={style.imageContainer}>
            <Image className={style.image} src={uof} alt="university of Florida"></Image>
            <Image className={style.image} src={isu} alt="Iowa state university"></Image>
            <Image className={style.image} src={upenn} alt="university of Pensilvania"></Image>
            <Image className={style.image} src={osu} alt="Oregon state university"></Image>
        </div>
    </section>
  )
}
