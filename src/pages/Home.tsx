import './Home.scss'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'

function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Experience />
            <Projects />

        </>
    )
}

export default Home

