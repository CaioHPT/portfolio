import './index.css'

import fotoCaio from '../../images/fotoCaio.jpg'

const About = () => {
    return(
        <div className="container" id="about">
            <section className="about">
                <div className="circlePhoto">
                    <img src={fotoCaio} />
                </div>
                <div className="aboutText">
                    <h4>Caio Teixeira - Desenvolvedor Full Stack</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Laborum et aut quia doloremque, quaerat, dolore eius velit laudantium quam animi 
                        cupiditate voluptatem vitae obcaecati quae modi nihil repudiandae ex sint!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About