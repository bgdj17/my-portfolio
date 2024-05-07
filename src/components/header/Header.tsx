import './Header.scss'
// import hamburger from '../../assets/hamburger.png'
import NavBar from '../navBar/NavBar'


function Header() {
    // const optionsNav = ["About", "Experience", "Projects", "Contact"]

    return (
        <>
            <div className='content-header'>
                <NavBar></NavBar>
            </div>
        </>
    )
}

export default Header

