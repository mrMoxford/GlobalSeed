'use client'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import style from "./contact.module.css"
export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selection, setSelection] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading]  = useState(false);

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    if(!email){
      setError("Please enter your email")
      return;
    }
    if(!message){
      setError("Please enter your message")
      return;
    }

    const templateParams = {
      fullName: name,
      email: email,
      enquiry: enquiry,
      message: message,
    }

    setError("")
    setIsLoading(true)
    emailjs
      .sendForm(process.env.NEXT_APP_SERVICE_ID ?? "", process.env.NEXT_APP_TEMPLATE_ID ?? "", templateParams, {
        publicKey: process.env.NEXT_APP_PUBLIC_KEY ?? "",
      })
      .then(
        function(response){
          setEmail(""),
          setName("")
          setSelection("")
          setMessage("")
          setIsLoading(false)
          setSuccess("Your message has successfully been sent")
        },
        function(error){
          setError("There was an error sending your message")
          console.error(error)
          setIsLoading(false)
        }
      );
  };

  return (
    <section id="contact" className={style.contactPage} >
      {status && renderAlert()}
      <h1 className={style.title}>Contact Us</h1>
      <article className={style.formContainer}>
        <form ref={form} onSubmit={sendEmail} className={style.form}>
            <label htmlFor="name">name:</label><input className={style.input} id="name" type="text" placeholder="Name" />
            <label htmlFor="email">email:</label><input className={style.input} id="email" type="email" placeholder="email@company.com" />
            <label htmlFor="enquiry">enquiry:</label><select id="enquiry" className={style.select} defaultValue="enquiry"  required>
            <option value="enquiry">Choose your enquiry</option>
            <option value="Global Adventure" className={style.default}>
              Global Adventure
            </option>
            <option value="Global Cheer" className={style.globalCheer}>
              Global Cheer
            </option>
            <option value="Study Abroad" className={style.studyAbroad}>
              Study Abroad
            </option>
            <option value="consulting" className={style.consulting}>
              Consulting
            </option>
            </select>
            <label htmlFor="message">Message:</label><textarea className={style.input} rows="5" id="text"type="text"></textarea>
            <button type="submit" value="submit" className={style.button}>Submit</button>
        </form>
       </article>
      
    </section>
  )
}
const renderAlert = () => (
  <div className={style.sentMessage}>
    <p>Thanks for messaging </p>
  </div>
);