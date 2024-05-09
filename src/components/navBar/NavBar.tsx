import { getImageUrl } from '../../utils'
import { useState } from 'react'
import './navBar.scss'


function NavBar() {
    const optionsNav = ["About", "Experience", "Projects", "Contact"]
    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className='nav-bar'>
            <a className="title" href='/'>
                Portfolio
            </a>
            <div className='menu'>
                <img className='menu-btn' 
                src={menuOpen ? getImageUrl('close.png') : getImageUrl('hamburger.png')}
                onClick={()=>setMenuOpen(!menuOpen )} width={'38px'} />
                      

                <ul className={`menu-items ${menuOpen && 'menu-open'}`} onClick={()=> setMenuOpen(false)}>
                    {optionsNav.map(option => {
                        return <li className='item'><a rel="stylesheet" href={`#${option}`}>{option}</a></li>
                    })}
                </ul>
            </div>
        </nav>

    )
}

export default NavBar

