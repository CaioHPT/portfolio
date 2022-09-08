import './index.css'

import fotoCaio from '../../images/fotoCaio.jpg'

const About = () => {
    return (
        <div className="container" id="about">
            <section className="about">
                <div className="circlePhoto">
                    <img src={fotoCaio} />
                </div>
                <div className="aboutText">
                    <h4>Caio Teixeira - Desenvolvedor Full Stack</h4>
                    <p>
                    Olá, eu sou o Caio, tenho 19 anos e sou programador Full Stack, atualmente 
                    trabalho para a Klab como Desenvolvedor de software. 
                    Sou muito curioso sobre assuntos que envolvem o mundo tech de uma maneira geral 
                    e sigo sempre estudando e me atualizando, especialmente em programação. 
                    Eu estudo programação desde meus 16 anos e neste período seleciono esses 3 pontos como os maiores aprendizados até aqui: 
                    1. É uma área desafiadora e eu gosto disso, um desafio recente foi meu primeiro projeto completo 
                    envolvendo front end e back end ligados, apresentado como TCC. 
                    2. Aprendo coisas novas o tempo todo e isso me motiva muito, 
                    adoro ser provocado a aprender algo novo. 
                    3. A maioria dos aprendizados são construídos nas trocas de informações e compartilhamento de 
                    conhecimento com outras pessoas e, 
                    para mim, trabalhar e estudar em equipe/times tem sido um dos pontos mais relevantes da minha carreira.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About