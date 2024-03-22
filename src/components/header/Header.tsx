import './Header.scss'

function Header() {
    const optionsNav = ["home", "sobre", "projetos", "contato", "Certificações"]

    return (
        <>
            <div className='content-header'>
                <div>
                    <h1>BRUNA</h1>
                </div>
                <div className='nav-header'>
                    <ul>
                        {optionsNav.map(option => {
                            return <li className='option-nav'><a rel="stylesheet" href={`#${option}`}>{option}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header

