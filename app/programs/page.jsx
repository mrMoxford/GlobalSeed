import GlobalCheer from '../sections/globalCheer/GlobalCheer'
import GlobalAdventure from '../sections/globalAdventure/GlobalAdventure'
import style from './pricing.module.css'
const globalT = {
  title:"Global Adventure Tachikawa",
  priceInfo: "¥10,000 /mo + t-shirt ",
  details: ["Time: 4th Sunday every month 10:00-15:00","Location: Tachikawa Showakinen Park.","Drop off and pick up: Nishi Tachikawa Station park entrance. ",],
  explain: "Class explanation:",
  expInfo: "A full day excursion in the park. Enjoy the out doors with our native coaches. Split into morning and afternoon blocks.",
  headingOne: "Morning Block:",
  hoBullets: ["10:00-10:30 Greeting and group warm up activity.","10:30-12:00: Activity rotation. Three 30 minute activities focusing on different points of athletics: Coordination, Stamina, Strength, Agility, and Teamwork","12:00-13:00 Lunchtime and break time"],
  headingTwo: "Afternoon Block:",
  htBullets: ["3:00-14:45 STEM sports: American science and math education program sports integration lesson.","14:45 - 15:00 Final words, clean up and group picture."]

}
const globalS = {
  title:"Global Adventure Shibuya",
  priceInfo: "¥10,000 /mo + t-shirt ",
  details: ["Time: 2nd Sunday every month 10:00-15:00","Location: Yoyogi Park","Drop off and pick up: Yoyogi park Clock tower entrance near Harajuku Station.",],
  explain: "Class explanation:",
  expInfo: "A full day excursion in the park. Enjoy the out doors with our native coaches. Split into morning and afternoon blocks.",
  headingOne: "Morning Block:",
  hoBullets: ["10:00-10:30 Greeting and group warm up activity.","10:30-12:00: Activity rotation. Three 30 minute activities focusing on different points of athletics: Coordination, Stamina, Strength, Agility, and Teamwork","12:00-13:00 Lunchtime and break time"],
  headingTwo: "Afternoon Block:",
  htBullets: ["3:00-14:45 STEM sports: American science and math education program sports integration lesson.","14:45 - 15:00 Final words, clean up and group picture."]

}

const cheer = {
  title:"Global Cheer",
  priceInfo:"¥9,000 /mo + t-shirt & Pompom rental",
  details: ["Cheer Class for 1st-3rd grade","50 minute introductory cheer class","Time: First three Thursdays a month 16:00-16:50","Location: Shibuya Cultural Center Owada"],
  explain:"Class explanation:",
  expInfo:"A fun 50 minute introductory cheer class. Great for beginners to cheer! Learn cheer choreography in English with support from our Cheer coach Miki. Each class is themed to integrate different vocabulary and English grammar along with cheering. Every two months there will be a short presentation."}
const cheerAdvanced = {
  title:"Global Cheer Advanced",
  priceInfo:"¥9,000 /mo + t-shirt & Pompom rental",
  details: ["Cheer Class for4th-6th grade","90 minute cheer class","Time: First three Thursdays a month 17:00-18:30","Location: Shibuya Cultural Center Owada"],
  explain:"Class explanation:",
  expInfo:"A fun 90 minute cheer class in English. This class will teach cheers, and some basic stunting from our cheer coach Miki. Each class is themed to integrate different vocabulary and English grammar along with cheering. There will be a short presentation show every two months."}

export default function Programs() {
  return (
    <main className={style.container}>
        <h1 className={style.title}>Programs</h1>
        <section className={style.cardContainer}>
          <h2>Global Adventure</h2>
          <div className={style.cardGrid}>
          <GlobalAdventure className={style.primaryCard} props={globalT}/>
          <GlobalAdventure className={style.secondaryCard} props={globalS}/>
          </div>
        </section>
        <section className={style.cardContainer}>
          <h2>Global Cheer</h2>
          <div className={style.cardGrid}>
          <GlobalCheer className={style.primaryCard} props={cheer}/>
          <GlobalCheer className={style.secondaryCard} props={cheerAdvanced}/>
          </div>
          
        </section>
    </main>
    
  )
}
