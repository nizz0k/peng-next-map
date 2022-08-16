import { useState } from 'react'
import Link from 'next/Link'
import SiteLogo from '../components/CompLogo'
import navStyles from '../styles/Nav.module.css'


const Nav = () =>{

const [isNavExpanded, setIsNavExpanded] = useState(false)
return(
<div>
<nav className={navStyles.nav}>
<SiteLogo />
<button className={navStyles.hamburger} onClick={() => {
setIsNavExpanded(!isNavExpanded);
}}>
{/* icon from heroicons.com */}
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>

</button>
<div className={navStyles.navigation}>
    <ul className={navStyles.menu}>
        <li className={navStyles.links}>
            <Link href='/'>
                <a className={navStyles.anchors}>Home</a>
            </Link>
        </li>
        <li className={navStyles.links}>
            <Link href='/map'>
            <a className={navStyles.anchors}>Map Page</a>
                </Link>
        </li>
        <li className={navStyles.links}>
            <Link href='/about' >
            <a className={navStyles.anchors}>About</a>
                </Link>
        </li>
    </ul>
</div>
</nav>
</div>
    )
}

export default Nav 