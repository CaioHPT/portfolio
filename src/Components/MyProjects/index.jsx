import './index.css'

import fotoMoveit from '../../images/fotoMoveit.jpg'
import fotoTCC from '../../images/fotoTcc.jpg'
import fotoRedux from '../../images/fotoRedux.jpg'
import fotoCalculadora from '../../images/fotoCalculadora.jpg'
import fotoNextApp from '../../images/fotoNextApp.jpg'
import fotoContributorsProject from '../../images/fotoContributorsProject.jpg'

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
                            Alguns dos meus projetos web individuais e em grupo para praticar.
                        </p>
                        <div className="divCarousel">
                            <div className="carousel" data-flickity='{ "cellAlign": "left" ,
                        "freeScroll": true, "wrapAround": true}'>
                                <div className="carousel-cell">
                                    <div className="cardCarousel" >
                                        <a href='https://brothers-cars.herokuapp.com' target="_blank">
                                            <div className="card">
                                                <img src={fotoTCC} alt="Site do meu tcc" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="cardCarousel" >
                                        <a href="https://moveit-one-taupe.vercel.app" target="_blank">
                                            <div className="card">
                                                <img src={fotoMoveit} alt="Foto do Moveit feito na nlw" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="cardCarousel" >
                                        <a href="https://reduxappdev.netlify.app/" target="_blank">
                                            <div className="card">
                                                <img src={fotoRedux} alt="Foto do projeto para treinar redux" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="cardCarousel" >
                                        <a href="https://react-calculadora-app.netlify.app/" target="_blank">
                                            <div className="card">
                                                <img src={fotoCalculadora} alt="Foto da calculadora feita em react"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="cardCarousel" >
                                        <a href="https://search-users-git.vercel.app" target="_blank">
                                            <div className="card">
                                                <img src={fotoNextApp} alt="Foto de um site de pesquisa de usuarios do github feito com nextjs"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="cardCarousel" >
                                        <a href="https://contributors-and-roles.vercel.app" target="_blank">
                                            <div className="card">
                                                <img src={fotoContributorsProject} 
                                                alt="Foto de um site que mostra os colaboradores e cargos da pedido pago, feito com nextjs"/>
                                            </div>
                                        </a>
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