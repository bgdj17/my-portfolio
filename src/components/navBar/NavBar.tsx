import './navBar.scss'
import hamburger from '../../assets/hamburger.png'
import close from '../../assets/close.png'
import { useState } from 'react'


function NavBar() {
    const optionsNav = ["About", "Experience", "Projects", "Contact"]
    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className='nav-bar'>
            <a className="title" href='/'>
                Bruna
            </a>
            <div className='menu'>
                <img className='menu-btn' 
                src={menuOpen ? close : hamburger}
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

