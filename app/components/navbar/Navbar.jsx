'use client'
import { useState } from 'react'
import Link from 'next/link'
import style from './navbar.module.css'
import Image from 'next/image'
import Logo from '../../../public/globalseedlogo.png'
import menuOpen from "../../../public/menuOpen.png"
import menuClose from "../../../public/menuClose.png"

export default function navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleNavLink = () =>{
    setMenuToggle(false)
  }
  return (
    <nav className={style.primaryNav}>
      <Link className= {style.link} href= "/"><Image className= {style.logo}src={Logo} alt="global-seed logo"  height= "50" width="auto"></Image></Link>
      <ul  className = {style.navList}>
        <Link className= {style.link} href= "/"> Home</Link>
        <Link className= {style.link}  href= "/#about"> About</Link>
        <Link className= {style.link} href= "/programs"> Programs</Link>
        <Link className= {style.link} href= "/study-abroad"> Study Abroad</Link>
        <Link className= {style.link} href= "/consulting"> Consulting</Link>
        <Link className= {style.link} href= "/contact"> Contact</Link>
      </ul>
      <div className={style.navbar_menu}>
        <Image
        className={style.menuOpen}
          src={menuOpen}
          alt="menutoggle open"
          onClick={() => setMenuToggle(true)}
        />
      </div>
      {menuToggle && (
        <div className={style.navbar_overlay}>
          <Image
            className={style.menuClose}
            src={menuClose}
            alt="menutoggle closed"
            onClick={() => setMenuToggle(false)}
          />
          <ul className={style.toggleNav}>
          <Link onClick={handleNavLink} className= {style.link} href= "/"> Home</Link>
          <Link onClick={handleNavLink} className= {style.link}  href= "/#about"> About</Link>
          <Link onClick={handleNavLink} className= {style.link} href= "/programs"> Programs</Link>
          <Link onClick={handleNavLink} className= {style.link} href= "/study-abroad"> Study Abroad</Link>
          <Link onClick={handleNavLink} className= {style.link} href= "/consulting"> Consulting</Link>
          <Link onClick={handleNavLink} className= {style.link} href= "/contact"> Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  )
}
