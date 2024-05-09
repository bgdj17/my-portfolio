import { getImageUrl } from '../../../src/utils'
import './experience.scss'

function Experience() {
    return (

        <section className='container-experience' id='Experience'>
            <h2>EXPERIENCE</h2>

            <div className='content-experience'>
                <div className='logos'>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('html.png')} alt="html" />
                        </span>
                        HTML
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('css.png')} alt="html" />
                        </span>
                        CSS
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('react.png')} alt="html" />
                        </span>
                        REACT
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('typescript.svg')} alt="html" />
                        </span>
                        Typescript
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('node.png')} alt="html" />
                        </span>
                        Node JS
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('tailwindcss-icon.svg')} alt="html" />
                        </span>
                        Tailwind
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('storybook-icon.svg')} alt="html" />
                        </span>
                        Storybook
                    </div>
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('microsoft-azure.svg')} alt="html" />
                        </span>
                        Azure Devops
                    </div>
                   
                    <div className='item-list'>
                        <span className='image-list'>
                            <img src={getImageUrl('github-desktop.svg')} alt="html" />
                        </span>
                        GitHub Actions
                    </div>
                    {/* <span className='item-list'>
                        <img src={getImageUrl('css.png')} alt="css" />
                    </span>
                    CSS
                    <span className='item-list'>
                        <img src={getImageUrl('react.png')} alt="react" />
                        React
                    </span>
                    <span className='item-list'>
                        <img src={getImageUrl('typescript.svg')} alt="react" />
                        Typescript
                    </span>
                    <span className='item-list'>
                        <img src={getImageUrl('tailwindcss-icon.svg')} alt="react" />
                        Tailwind
                    </span>
                    <span className='item-list'>
                        <img src={getImageUrl('storybook-icon.svg')} alt="react" />
                        Storybook
                    </span>
                    <span className='item-list'>
                        <img src={getImageUrl('microsoft-azure.svg')} alt="react" />
                        Azure DevOps
                    </span>
                    <span className='item-list'>
                        <img src={getImageUrl('github-desktop.svg')} alt="react" />
                        GitHub Actions
                    </span> */}


                </div>



                <ul className='list-experience'>
                    <li>
                        <img src={getImageUrl('logo-avanade-icon.png')} alt="" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl('vereda.png')} alt="" />
                        <div>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized back-end systems and APIs</p>
                        </div>
                    </li>

                </ul>
            </div>

        </section>

    )
}

export default Experience

