import { useRef } from 'react'
import './index.css'

const Nav = () => {
    
    const list = useRef();

    function toggleMenu(){
        list.current.classList.toggle("active")
    }

    
    return(
        <div className="navbar" id='home'>
            <div className="btnMobileMenu">
                <button onClick={toggleMenu}><i className="bi bi-list"></i></button>
            </div>
            <nav ref={list}>
                <ul className='navList'>
                    <a href="#home"><li>Home</li></a>
                    <a href="#projects"><li>Projetos</li></a>
                    <a href="#about"><li>Sobre</li></a>
                    <a href="#contact"><li>Contato</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Nav