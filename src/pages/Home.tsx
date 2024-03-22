import './Home.scss'
import Header from '../components/header/Header'
import Main from '../components/main/Main'

function Home() {
    return (
        <>
        <div>
            <Header></Header>
        </div>
            <div className='content'>
                <Main></Main>
            </div>
        </>
    )
}

export default Home

