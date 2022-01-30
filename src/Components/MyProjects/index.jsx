import './index.css'

import fotoMoveit from '../../images/fotoMoveit.jpg'
import fotoTCC from '../../images/fotoTcc.jpg'
import fotoRedux from '../../images/fotoRedux.jpg'
import fotoSiteCarros from '../../images/fotoSiteCarros.jpg'
import fotoCalculadora from '../../images/fotoCalculadora.jpg'


const MyProjects = () => {
    return (
        <div className="container" id='projects'>
            <div className="divProjects row">
                <div className="col-12 col-md PhotoBackGround">
                    <section className="title">
                        <h1>Meus</h1>
                        <h1>Projetos</h1>
                    </section>
                </div>
                <div className="col-12 col-md">
                <section className="projects text-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laborum et aut quia doloremque, quaerat, dolore eius.
                    </p>
                    <div className="divCarousel">
                        <div className="carousel" data-flickity='{ "cellAlign": "left" ,
                        "freeScroll": true, "wrapAround": true}'>
                            <div className="carousel-cell">
                                <div className="cardCarousel" >
                                    <a href='https://brothers-cars.herokuapp.com'target="_blank">
                                        <div className="card">
                                            <img src={fotoTCC} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="cardCarousel" >
                                    <a href="https://moveit-one-taupe.vercel.app" target="_blank">
                                        <div className="card">
                                            <img src={fotoMoveit} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="cardCarousel" >
                                    <div className="card">
                                        <img src={fotoRedux} />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="cardCarousel" >
                                    <div className="card">
                                        <img src={fotoSiteCarros} />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="cardCarousel" >
                                    <div className="card">
                                        <img src={fotoCalculadora} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
    )
}

export default MyProjects