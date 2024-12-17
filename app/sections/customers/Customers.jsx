import CustomerCard from "@/app/components/customerCard/CustomerCard"
import style from "./customers.module.css"
import image1 from "../../../public/female-1.png"
import image2 from "../../../public/male-1.png"
import image3 from "../../../public/female-3.png"
import image4 from "../../../public/female-4.png"
import image5 from "../../../public/female-5.png"
import image6 from "../../../public/male-2.png"
export default function Customers() {
  return (
    <section className={style.customersContainer}>
        <h2 className={style.title}>OUR CUSTOMERS</h2>
        <div className={style.reviewGrid}>
        <CustomerCard className={style.image} image={image1} title="Martha stewart" subtitle="global Cheer" text={'“ i had a lot of fun on this programe i learnt a lot and made great life long friends... “'}/>
        <CustomerCard className={style.image} image={image2} title="Martha stewart" subtitle="global Cheer" text={'“ i had a lot of fun on this programe i learnt a lot and made great life long friends... “'}/>
        <CustomerCard className={style.image} image={image3} title="Martha stewart" subtitle="global Cheer" text={'“ i had a lot of fun on this programe i learnt a lot and made great life long friends... “'}/>
        <CustomerCard className={style.image} image={image4} title="Martha stewart" subtitle="global Cheer" text={'“ i had a lot of fun on this programe i learnt a lot and made great life long friends... “'}/>
        <CustomerCard className={style.image} image={image5} title="Martha stewart" subtitle="global Cheer" text={'“ i had a lot of fun on this programe i learnt a lot and made great life long friends... “'}/>
        <CustomerCard className={style.image} image={image6} title="Martha stewart" subtitle="global Cheer" text={'“ i had a lot of fun on this programe i learnt a lot and made great life long friends... “'}/>
        </div>
    </section>
  )
}


