import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { getImageUrl } from '../../../src/utils'
import './Main.scss'

function Main() {
    const iconStyle = { color: '#fff', fontSize: '24px', marginRight: '10px' };

    return (

        <section className='container-main'>
            <div className='content-main'>
                <h1 className='title'>Hi, I'm Bruna</h1>
                <p className='description'>
                    I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...
                </p>
                <section className='social-media'>
                    <a href="https://www.instagram.com/brugjesus/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/bruna-gon%C3%A7alves-de-jesus-75173297/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/bgdj17" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                        <FaGithub /></a>
                </section>

                <a className="contact-btn" href="mailto:bgdj17@gmail.com">Contact Me</a>
            </div>

            <div className='photo'>
                <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('foto_perfil.jpeg')})` }}></div>
            </div>
            <div className="top-blur" />
            <div className="bottom-blur" />
        </section>

    )
}

export default Main

