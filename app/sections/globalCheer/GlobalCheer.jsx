import style from './globalCheer.module.css'
import Link from 'next/link'
export default function PricingCard(props) {
  const details = props.props
  return (
    <section className={`${style.container} ${props.className}`}>
            <h3 className={style.cardTitle}>{details.title}</h3>
            <p className={style.info}>{details.priceInfo}</p>
            <div  className={style.textContainer}>
            <ul className={style.bullets}>
                {details.details.map((detail,index) => (
                    <li className={style.details} key={index}>{detail}</li>
                ))}
            </ul>
            
            <div className={style.disc}>
              <h4>{details.explain}</h4>
              <p>{details.expInfo}</p>
              </div>
            <Link className ="link" href='/contact'>Contact Us</Link>
            </div>
    </section>
    
  )
}
