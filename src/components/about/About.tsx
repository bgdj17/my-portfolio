import { getImageUrl } from '../../../src/utils'
import './about.scss'

function About() {
    return (

        <section className='container-about' id='About'>
            <h2>ABOUT</h2>

            <div className='content-about'>

                <div className='image-avatar'>
                    <img src={getImageUrl('avatar.png')} alt="" />
                </div>

                <ul className='list-experience'>
                    <li>
                        <img src={getImageUrl('image2.png')} alt="" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl('image3.png')} alt="" />
                        <div>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized back-end systems and APIs</p>
                        </div>
                    </li>
                    <li><img src={getImageUrl('image4.png')} alt="" />
                        <div>
                            <h3>DevOps</h3>
                            <p>I have experience with CI/CD atomization process with Azure and GitHub Actions</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>

    )
}

export default About

