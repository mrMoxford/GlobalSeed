import style from "./studyAbroad.module.css"
import Link from "next/link"

const content = {
title: "Study Abroad",
subHeading: "Global Study Abroad",
priceInfo: " CONTACT US FOR A FREE QUOTE",
p1: "This program is for any athletes who want to pursue a college sports career abroad. You can learn normal English conversation of course, also English frequently used in sports coaching or training.This program is done with online lesson or live training. It up to your request!! If you need more info, just contact us.  info@globalseed-jp.com",
pHeading1: "Study abroad agent for Athletes",
p2: "We have perfect agent support for student athletes who want to go to USA or any other countries. We support you as order-made with your request. ",
lHeading1: "Support and Consultation services",
list1: ["Approach to both academic and athletic career.","Liaison to schools coach directly to choose the ideal team fit your abilities and goals","For applicable athletes, information and assistance about various types of scholarship options."],
lheading2:"What makes us unique?" ,
list2: ["Our coordination staff are previous student athletes in a USA college understand the special circumstances of athletes.","Custom order-made support by using wide variety of connections with many sports in USA","For applicable athletes, information and assistance about various types of scholarship options."],
pheading2: "Our agent program consists of the following:",
pheading3: "Different School options:",
p3: "University, Collage, Boarding school, Community College, Junior College, High school",
lheading3: "Basic Support Package:", 
list3: ["Free Initial counselling","Research school and teams","Consulting your decision and pathway","Support your visa application","Support your scholarship application"],
pheading4: "Additional Support options:",
p4:"Daily living arrangements , Academic, Sports career support, visitation of candidate school or facility",
p5:"After free initial counseling session you will be supplied with a comprehensive plan of a course of action with a selection of prospective schools. *We recommend having enough preparation schedule as about 1 year prior to planned starting date.",
p6:"Please feel free to contact us if you are looking to start as a global athlete.  info@globalseed-jp.com",}
export default function StudyAbroad() {
  return (
    <section className={style.studyAbroad}>
      <h1 className={style.title}>{content.title}</h1>
      <div className={style.container}>
        <h2>{content.subHeading}</h2>
        <div>
          <p className={style.priceInfo}>{content.priceInfo}</p>
        </div>
        <div className={style.twoColumns}>
          <div>
          <p>{content.p1}</p>
          <h3 className={style.heading}>{content.pHeading1}</h3>
          <p>{content.p2}</p>
          <h3 className={style.heading}>{content.lHeading1}</h3>
          <ul>
            {content.list1.map((bullet,index) => (<li key={index}>{bullet}</li>))}
          </ul>
          <h3 className={style.heading}>{content.lheading2}</h3>
          <ul>
            {content.list2.map((bullet,index) => ( <li key={index}>{bullet}</li>))}
          </ul>
          </div>
          <div>
            <h3 >{content.pheading2}</h3>
            <h4 className={style.heading}>{content.pheading3}</h4>
            <p>{content.p3}</p>
            <h4 className={style.heading}>{content.lheading3}</h4>
            <ul>
              {content.list3.map((bullet,index) => (<li key={index}>{bullet}</li>))}
            </ul>
            <h4 className={style.heading}>{content.pheading4}</h4>
            <p>{content.p4}</p>
            <p>{content.p5}</p>
            <p>{content.p5}</p>
          </div>
          
        </div>
        <Link className="link" href="/contact">Contact Us</Link>
      </div>
    </section>
  )
}
