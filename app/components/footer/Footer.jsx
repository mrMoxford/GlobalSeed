

import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/globalseedlogo.png'
export default function Footer() {
  return (
    <footer className={styles.primaryNav}>
      <Link className= {styles.link} href= "/"><Image className= {styles.logo}src={Logo} alt="global-seed logo"  height= "50" width="auto"></Image></Link>
      {/* <ul  className = {styles.navList}>
        <Link className= {styles.link} href= "/"> Home</Link>
        <Link className= {styles.link}  href= "/about"> About</Link>
        <Link className= {styles.link} href= "/programs"> Programs</Link>
        <Link className= {styles.link} href= "/study-abroad"> Study Abroad</Link>
        <Link className= {styles.link} href= "/consulting"> Consulting</Link>
        <Link className= {styles.link} href= "/contact"> Contact</Link>
      </ul>
      <div> socials</div> */}
    </footer>
  )
}
