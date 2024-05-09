import { getImageUrl } from '../../../src/utils'
import './experience.scss'

function Experience() {
    return (

        <section className='container-experience' id='Experience'>
            <h2>EXPERIENCE</h2>

            <div className='content-experience'>
                <div className='logos'>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('html.png')} alt="html" />
                        </div>
                        <span>HTML</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('css.png')} alt="html" />
                        </div>
                        <span>CSS</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('react.png')} alt="html" />
                        </div>
                        <span>React</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('typescript.svg')} alt="html" />
                        </div>
                        <span>Typescript</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('node.png')} alt="html" />
                        </div>
                        <span>Node JS</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('tailwindcss-icon.svg')} alt="html" />
                        </div>
                        <span>Tailwind</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('storybook-icon.svg')} alt="html" />
                        </div>
                        <span>Storybook</span>
                    </div>
                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('microsoft-azure.svg')} alt="html" />
                        </div>
                        <span>Azure Devops</span>
                    </div>

                    <div className='item-list'>
                        <div className='image-list'>
                            <img src={getImageUrl('github-desktop.svg')} alt="html" />
                        </div>
                        <span>GitHub Actions</span>
                    </div>
                </div>

                <ul className='list-experience'>
                    <li className='item-experience'>
                        <img src={getImageUrl('logo-avanade-icon.png')} alt="" />
                        <div>
                            <h3>DevOps Engineering</h3>
                            <h4>Sept, 2023 - Present</h4>
                            <ul className='list-project'>
                                <li>SRE</li>
                                <li>Update TFS</li>
                            </ul>
                        </div>
                    </li>
                    <li className='item-experience'>
                        <img src={getImageUrl('logo-avanade-icon.png')} alt="" />
                        <div>
                            <h3>Front-End Development</h3>
                            <h4>Sept, 2023 - Present</h4>
                            <ul className='list-project'>
                                <li>SRE</li>
                                <li>Update TFS</li>
                            </ul>
                        </div>
                    </li>
                    <li className='item-experience'>
                        <img src={getImageUrl('logo-avanade-icon.png')} alt="" />
                        <div>
                            <h3>Back-end Development</h3>
                            <h4>Sept, 2023 - Present</h4>
                            <ul className='list-project'>
                                <li>SRE</li>
                                <li>Update TFS</li>
                            </ul>
                        </div>
                    </li>

                    <li className='item-experience'>
                        <img src={getImageUrl('vereda.png')} alt="" />
                        <div>
                            <h3>Front-End Development</h3>
                            <h4>Sept, 2023 - Present</h4>
                            <ul className='list-project'>
                                <li>SRE</li>
                                <li>Update TFS</li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>

        </section>

    )
}

export default Experience

