import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.scss'

function Footer() {
    return (
        <div className='container-footer' id='Contact'>
            <div className='content-footer'>
                <div className='contact'>
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>

                </div>
                <div className='contact-option'>
                    <span>
                        <a href="https://www.instagram.com/brugjesus/" target="_blank" rel="noopener noreferrer" >
                            <FaEnvelope />
                        </a>
                        <a href="https://www.instagram.com/brugjesus/" target="_blank" rel="noopener noreferrer" >
                            bgdj17@gmail.com
                        </a>
                    </span>

                    <span>
                        <a href="https://www.linkedin.com/in/bruna-gon%C3%A7alves-de-jesus-75173297/" target="_blank" rel="noopener noreferrer" >
                            <FaLinkedin />
                        </a>
                        <a href="https://www.linkedin.com/in/bruna-gon%C3%A7alves-de-jesus-75173297/" target="_blank" rel="noopener noreferrer" >
                            bruna-goncalves-de-jesus
                        </a>
                    </span>

                    <span>
                        <a href="https://github.com/bgdj17" target="_blank" rel="noopener noreferrer" >
                            <FaGithub />
                        </a>
                        <a href="https://github.com/bgdj17" target="_blank" rel="noopener noreferrer" >
                            github.com/bgdj17</a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Footer

