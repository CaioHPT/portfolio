import "./index.css"

const Slogan = () => {
    return (
        <div className="divSlogan">
            <span>
                <h1>Caio</h1>
                <h1>Teixeira.</h1>
            </span>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laborum et aut quia doloremque, quaerat, dolore eius velit laudantium quam animi
                    cupiditate voluptatem vitae obcaecati quae modi nihil repudiandae ex sint!
                </p>
                <a href="https://web.whatsapp.com/send?phone=5511976366619&text=Olá%20Caio,%20vi%20seu%20portfólio%20e%20fiquei%20interessado%20em%20trabalhar%20com%20você."
                target="_blank"><button type="button" className="btnSlogan">Contate-me</button></a>
            </div>
        </div>
    )
}

export default Slogan