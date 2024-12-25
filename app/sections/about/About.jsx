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
         {data.discription}
        </p>
      </div>
    </section>
  )
}
