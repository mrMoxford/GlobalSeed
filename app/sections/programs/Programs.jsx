import MiniCard from '@/app/components/mini-card/MiniCard'
import style from './programs.module.css'
import swim from "../../../public/global-swim.png"
import cheer from "../../../public/global-cheer.png"
import adventure from "../../../public/global-park-adv.png"
import {getMiniCard} from "../../lib/contentful"

const globalSwim = await getMiniCard("2Jazk6kLlVg74UHIdQQKyi", false)
const globalCheer = await getMiniCard("6ULZMQgTJsMViKlDQrVsFr", false)
const globalPark = await getMiniCard("5NCb1ROGaiLt7Rf3fGiIhy", false)
export default function Programs() {
 
  return (
    <section className={style.programsContainer}>
        <h2 className={style.title}> our programs</h2>
        <div className={style.cardGrid}>
            <MiniCard content={globalSwim} />
            <MiniCard content={globalCheer} />
            <MiniCard content={globalPark} />
        </div>
    </section>
  )
}
