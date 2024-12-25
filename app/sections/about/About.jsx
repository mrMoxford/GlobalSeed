import style from './about.module.css'
import Image from 'next/image'
import { getAbout } from '@/app/lib/contentful'

const data = await getAbout("7HJSjxt0IjbdMYZriaEmXA", false)
export default function About() {
  
  return (
    <section id="about" className={style.aboutContainer}>
      <div className={style.imageContainer}>
        <Image className={style.image} src={data.image.url} alt={data.image.title} height={data.image.height} width={data.image.width}></Image>
      </div>
      <div className={style.textContainer}>
        <h2 className={style.title}>
        {data.title}
        </h2>
        <p>
<<<<<<< HEAD
          At Global Seed, we specialize in guiding talented Japanese student-athletes toward achieving their goals at prestigious U.S. universities. With our unique support system, we handle every part of the journey—from preparing academic documents to organizing university visits and setting up interviews with coaches.
=======
         {data.discription}
        </p>
>>>>>>> 705a3e1 (cms updates)
      </div>
    </section>
  )
}
