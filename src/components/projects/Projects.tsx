import { getImageUrl } from '../../utils'
import './projects.scss'

function Projects() {
    return (

        <section className='container-projects' id='Projects'>
            <h2>PROJECTS</h2>
            <div className='content-project'>
                <div className='project-item'>
                    <div className='image-project'>
                        <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('project.jpeg')})` }}></div>
                    </div>

                    <div className='description'>
                        <h3>Project A</h3>
                        <p>This is a project made to
                            learn the latest languages
                            by building an app.</p>

                        <div className='hard-skill'>
                            <div>React</div>
                            <div>Express</div>
                            <div>Node</div>
                        </div>
                    </div>

                    <div className='project-card-buttons'>
                        <button className='btn-project'>Demo</button>
                        <button className='btn-project'>Source</button>
                    </div>
                </div>

                <div className='project-item'>
                    <div className='image-project'>
                        <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('project.jpeg')})` }}></div>
                    </div>

                    <div className='description'>
                        <h3>Project B</h3>
                        <p>This is a project made to
                            learn the latest languages
                            by building an app.</p>

                        <div className='hard-skill'>
                            <div>React</div>
                            <div>Express</div>
                            <div>Node</div>
                        </div>
                    </div>

                    <div className='project-card-buttons'>
                        <button className='btn-project'>Demo</button>
                        <button className='btn-project'>Source</button>
                    </div>
                </div>

                <div className='project-item'>
                    <div className='image-project'>
                        <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('project.jpeg')})` }}></div>
                    </div>

                    <div className='description'>
                        <h3>Project C</h3>
                        <p>This is a project made to
                            learn the latest languages
                            by building an app.</p>

                        <div className='hard-skill'>
                            <div>React</div>
                            <div>Express</div>
                            <div>Node</div>
                        </div>
                    </div>

                    <div className='project-card-buttons'>
                        <button className='btn-project'>Demo</button>
                        <button className='btn-project'>Source</button>
                    </div>
                </div>



            </div>

            {/* <div className='projects-items'>
                <div className='project-item'>
                    <div className='image-area'>
                        <div className='image-project'>
                            <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('project.jpeg')})` }}></div>
                        </div>

                    </div>
                    <div className='description'>
                        <h3>Project A</h3>
                        <p>This is a project made to
                            learn the latest languages
                            by building an app.</p>
                        <div className='hard-skill'>
                            <div>React</div>
                            <div>Express</div>
                            <div>Node</div>
                        </div>
                        <div>
                            <button>Demo</button>
                            <button>Source</button>
                        </div>
                    </div>
                </div>

                <div className='project-item'>
                    <div className='image-area'>
                        <div className='image-project'>
                            <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('project.jpeg')})` }}></div>
                        </div>

                    </div>
                    <div className='description'>
                        <h3>Project A</h3>
                        <p>This is a project made to
                            learn the latest languages
                            by building an app.</p>
                        <div className='hard-skill'>
                            <div>React</div>
                            <div>Express</div>
                            <div>Node</div>
                        </div>
                        <div>
                            <button>Demo</button>
                            <button>Source</button>
                        </div>
                    </div>
                </div>

                <div className='project-item'>
                    <div className='image-area'>
                        <div className='image-project'>
                            <div className='div-img' style={{ backgroundImage: `url(${getImageUrl('project.jpeg')})` }}></div>
                        </div>

                    </div>
                    <div className='description'>
                        <h3>Project A</h3>
                        <p>This is a project made to
                            learn the latest languages
                            by building an app.</p>
                        <div className='hard-skill'>
                            <div>React</div>
                            <div>Express</div>
                            <div>Node</div>
                        </div>
                        <div>
                            <button>Demo</button>
                            <button>Source</button>
                        </div>
                    </div>
                </div>
            </div> */}


        </section>
    )
}

export default Projects

