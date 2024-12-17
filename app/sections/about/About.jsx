import style from './about.module.css'
import Image from 'next/image'
import about from '../../../public/About-us.jpeg'
export default function About() {
  return (
    <section id="about" className={style.aboutContainer}>
      <div className={style.imageContainer}>
        <Image className={style.image} src={about} alt=" about Global Seed"></Image>
      </div>
      <div className={style.textContainer}>
        <h2 className={style.title}>
        Our Mission
        </h2>
        <p>
          At Global Seed, we specialize in guiding talented Japanese student-athletes toward achieving their goals at prestigious U.S. universities. With our unique support system, we handle every part of the journey—from preparing academic documents to organizing university visits and setting up interviews with coaches. We provide a seamless process...
        </p>
      </div>
    </section>
  )
}
