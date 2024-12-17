import MiniCard from '@/app/components/mini-card/miniCard'
import style from './programs.module.css'
import swim from "../../../public/global-swim.png"
import cheer from "../../../public/global-cheer.png"
import adventure from "../../../public/global-park-adv.png"
export default function Programs() {
  return (
    <section className={style.programsContainer}>
        <h2 className={style.title}> our programs</h2>
        <div className={style.cardGrid}>
            <MiniCard title="Global Swim (coming soon)" text="Our English swim program, designed to enhance your communication skills while promoting teamwork, creativity, and confidence. Through a dynamic blend of swim training and language development activities..." image={swim} altText=" global-swim"/>
            <MiniCard title="Global Cheer" text="Our English cheer program, designed to enhance your communication skills while promoting teamwork, creativity, and confidence. Through a dynamic blend of cheerleading techniques and language development activities..." image={cheer} altText=" global-cheer"/>
            <MiniCard title="Global Park Adventure" text="A day in the park with one of our Coaches. This 5 hour, Sunday, multi sport program teaches various fundamentals of athleticism. Coordination, Stamina, Strength, Agility. Interconnecting social, and scholastic topics." image={adventure} altText="global-park-adventure"/>
        </div>
    </section>
  )
}
