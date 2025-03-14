'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname} from 'next/navigation';
import style from './navbar.module.css'
import Image from 'next/image'
import Logo from '../../../public/globalseedlogo.png'
import menuOpen from "../../../public/menuOpen.png"
import menuClose from "../../../public/menuClose.png"

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleNavLink = () =>{
    setMenuToggle(false)
  }
  const pathname = usePathname();
  return (
    <nav className={style.primaryNav}>
      <Link className= {style.link} href= "/"><Image className= {style.logo}src={Logo} alt="global-seed logo"  height= "50" width="auto"></Image></Link>
      <ul  className = {style.navList}>
        <Link className= {pathname === '/' ? style.active : style.link} href= "/"> Home</Link>
        <Link className= {pathname === '/#about' ? style.active : style.link}  href= "/#about"> About</Link>
        <Link className= {pathname === '/programs' ? style.active : style.link} href= "/programs"> Programs</Link>
        <Link className= {pathname === '/study-abroad' ? style.active : style.link} href= "/study-abroad"> Study Abroad</Link>
        {/* <Link className= {router.pathname == '/consulting' ? 'active' : style.link} href= "/consulting"> Consulting</Link> */}
        <Link className= {pathname == '/contact' ? style.active : style.link} href= "https://app.jibun-apps.jp/form/6c99f0e1-88ee-4f79-ad95-6d1f329c5d7d/new"> Contact</Link>
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
          {/* <Link onClick={handleNavLink} className= {style.link} href= "/consulting"> Consulting</Link> */}
          <Link onClick={handleNavLink} className= {style.link} href= "https://app.jibun-apps.jp/form/6c99f0e1-88ee-4f79-ad95-6d1f329c5d7d/new"> Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  )
}
