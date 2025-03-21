"use client"

import {useState } from "react"
import emailjs from '@emailjs/browser';
import style from "./contact.module.css"

export default function Contact() {
  
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        subject: userInput.subject,
        message: userInput.message
      };

      const res = await emailjs.send(serviceID,templateID, emailParams, publicKey);
    
      if (res.status === 200) {
        alert("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log({message: error});
    }
  };

  return (
    <section id="contact" className={style.contactPage} >
      <h1 className={style.title}>Contact Us</h1>
      <article className={style.formContainer}>
        <form  onSubmit={handleSubmit} className={style.form}>
            <label>name:</label><input className={style.input} name="name" value={userInput.name}
          onChange={handleChange}
          required type="text" placeholder="name"  />
            <label>email:</label><input className={style.input}   name="email"
          value={userInput.email}
          onChange={handleChange}
          required type="email" placeholder="email@company.com"  />
            <label>subject:</label><input className={style.input}  name="subject" value={userInput.subject} onChange={handleChange} required type="text" placeholder="Global cheer"  />
            <label>message:</label><textarea className={style.input}  name="message" value={userInput.message}
          onChange={handleChange}
          required rows="5" type="text" placeholder="message" />
            <button  type="submit" value="Send"  className={style.button}>Submit</button>
        </form>
       </article>
      
    </section>
  )
}
