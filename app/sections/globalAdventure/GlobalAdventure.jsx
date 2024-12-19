import style from './globalAdventure.module.css'
import Link from 'next/link'
export default function GlobalAdventure(props) {
const details = props.props
  return (
    <section className={`${style.container} ${props.className}`}>
            <h2 className={style.cardTitle}>{details.title}</h2>
            <p className={style.info}>{details.priceInfo}</p>
            <div  className={style.textContainer}>
            <ul className={style.bullets}>
                {details.details.map((bullet,index) => (
                    <li className={style.details} key={index}>{bullet}</li>
                ))}
            </ul>
            <div className={style.disc}>
            <h3>{details.explain}</h3>
            <p>{details.expInfo}</p>
            <h4>{details.headingOne}</h4>
            <ul className={style.bullets}>
            {details.hoBullets.map((bullet,index) => (
                    <li className={style.details} key={index}>{bullet}</li>
                ))}
            </ul>
            <h4>{details.headingTwo}</h4>
            <ul className={style.bullets}>
            {details.htBullets.map((bullet,index) => (
                    <li className={style.details} key={index}>{bullet}</li>
                ))}
            </ul>
            </div>
           
            <Link className ={style.button} href='/contact'>Contact Us</Link>
            </div>
    </section>
  )
}
