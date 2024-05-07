import './Main.scss'
import Photo from '../../assets/foto_perfil.jpeg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa6';

function Main() {
    const iconStyle = { color: '#fff', fontSize: '24px', marginRight: '10px' };

    return (
        <>
            <div className='content-main'>
                <div >
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

                <section id='sobre'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </section>

                <section id='Projetos'>
                    <h2>Principais Projetos:</h2>

                    <div>
                        <h3>Foundation React</h3>
                        <p>
                            Desenvolvimento de telas responsivas, dinamicas, com regras de
                            negócio complexas e dentro de sites com grande fluxo de
                            acesso e vendas, prezando sempre pela qualidade das
                            entregas e performance, atendendo as regras de SEO,
                            acessibilidade e com controle de tagueamento. Atuei com o
                            CMS Liferay(7.0 e a nova versão 7.4), além das seguintes Hard
                            Skills: Jquery, Js Vanilla, React js, Next Js, SASS, testes
                            unitários(Jest), TypeScript, Storybook, Express, API Rest,
                            Bootstrap, Tailwind.
                        </p>
                    </div>

                    <div>
                        <h3>Sistema interno</h3>
                    </div>

                    <div>
                        <h3>Página de eventos</h3>
                    </div>

                    <div>
                        <h3>Migração TFS</h3>
                    </div>

                    
                </section>

                <section></section>
                <section></section>

                <section id='Certificações'>
                    <h2>Certificações</h2>
                    A-Z900
                </section>
            </div>
        </>
    )
}

export default Main

