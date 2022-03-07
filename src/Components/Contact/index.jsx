import './index.css'

const Contact = () => {
    return(
        <div className="divContact" id='contact'>
            <div className="textContact">
                <h2>Contato</h2>
                <div>
                    <a href="mailto:caio.h.teixeira@gmail.com" target="_blank">
                        <span><i className="bi bi-envelope-fill"></i></span>
                        <span>caio.h.teixeira@gmail.com</span>
                    </a>
                </div>
                <div>
                    <a href="https://web.whatsapp.com/send?phone=5511976366619"
                    target="_blank">
                        <span><i className="bi bi-whatsapp"></i></span>
                        <span>(11) 97636-6619</span>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/CaioHPT" target="_blank">
                        <span><i className="bi bi-github"></i></span>
                        <span>https://github.com/CaioHPT</span>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/caioteixeiradev/' target="_blank">
                        <span><i className="bi bi-linkedin"></i></span>
                        <span>https://www.linkedin.com/in/caioteixeiradev/</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact