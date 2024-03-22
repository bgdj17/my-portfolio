import './Main.scss'
import Photo from '../../assets/foto_perfil.jpeg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa6';

function Main() {
    const iconStyle = { color: '#fff', fontSize: '24px', marginRight: '10px' };

    return (
        <>
            <div className='content-main'>
                <div>
                    <section className='description'>
                        <h2>Bem vindos!</h2>
                        <h1 className='typing-animation'>I'm Web Develop</h1>
                        <p>
                            I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...
                        </p>
                    </section>
                    <section className='social-media-section'>
                        <a href="https://www.instagram.com/brugjesus/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/bruna-gon%C3%A7alves-de-jesus-75173297/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/bgdj17" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaGit /></a>
                    </section>
                </div>
                <div className='photo'>
                    <div className='div-img' style={{ backgroundImage: `url(${Photo})` }}></div>
                </div>
                <div>

                </div>

                <div id='sobre'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>

                <div id='Projetos'>
                    <h2>Atuação em projetos:</h2>

                    <div>
                        Foundation React
                    </div>

                    <div>
                        Sistema interno
                    </div>

                    <div>
                        Página de eventos
                    </div>

                    <div>
                        Migração TFS
                    </div>

                    <div>
                        DevOps
                    </div>
                </div>

                <div id='Certificações'>
                    <h2>Certificações</h2>
                    A-Z900
                </div>
            </div>
        </>
    )
}

export default Main

