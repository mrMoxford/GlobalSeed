import GlobalCheer from '../sections/globalCheer/GlobalCheer'
import GlobalAdventure from '../sections/globalAdventure/GlobalAdventure'
import style from './pricing.module.css'
import {getProgramme} from "../lib/contentful"

const GlobalCheerA = await getProgramme("5RBifgexTEE1zE3WbD1apc", false)
const GlobalCheerB = await getProgramme("66vIUTeoN51KqEVzEKL0jD", false)
const GLobalAdventureT = await getProgramme("34IP87NRcEkz6X7xDNfwqb", false)
const GLobalAdventureS = await getProgramme("5fZbbYpbjq3if8qzv6oCzO", false)




export default function Programs() {
  return (
    <main className={style.container}>
        <h1 className={style.title}>Programs</h1>
        <section className={style.cardContainer}>
          <div className={style.cardGrid}>
          <GlobalAdventure className={style.primaryCard} content={GLobalAdventureT}/>
          <GlobalAdventure className={style.secondaryCard} content={GLobalAdventureS}/>
          </div>
        </section>
        <section className={style.cardContainer}>
          <div className={style.cardGrid}>
          <GlobalCheer className={style.primaryCard} content={GlobalCheerB}/>
          <GlobalCheer className={style.secondaryCard} content={GlobalCheerA}/>
          </div>
          
        </section>
    </main>
    
  )
}
