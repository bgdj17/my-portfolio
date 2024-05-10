import { FaGit, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './footer.scss'

function Footer() {
    return (
        <div className='content-footer' id='footer'>
            <div>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>

            </div>
            <section className='social-media'>
                <a href="https://www.instagram.com/brugjesus/" target="_blank" rel="noopener noreferrer" >
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/bruna-gon%C3%A7alves-de-jesus-75173297/" target="_blank" rel="noopener noreferrer" >
                    <FaLinkedin />
                </a>
                <a href="https://github.com/bgdj17" target="_blank" rel="noopener noreferrer" >
                    <FaGit /></a>
            </section>


        </div>
    )
}

export default Footer

