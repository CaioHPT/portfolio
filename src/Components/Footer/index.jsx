import './index.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="navegation">
                    <a href="#home">Home</a>
                    <a href="#projects">Projetos</a>
                    <a href="#about">Sobre</a>
                    <a href="#contact">Contato</a>
                </div>
                <div className="contactFooter">
                    <p>Contato</p>
                    <div className='icons'>
                        <a href="mailto:caio.h.teixeira@gmail.com" target="_blank"><span><i className="bi bi-envelope-fill"></i></span></a>
                        <a href="https://web.whatsapp.com/send?phone=5511976366619" target="_blank"><span><i className="bi bi-whatsapp"></i></span></a>
                        <a href="https://github.com/CaioHPT" target="_blank"><span><i className="bi bi-github"></i></span></a>
                        <a href='https://www.linkedin.com/in/caioteixeira1/' target="_blank"><span><i className="bi bi-linkedin"></i></span></a>
                    </div>
                </div>
                <div>
                    <p>&copy;Desenvolvido por Caio Teixeira.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer