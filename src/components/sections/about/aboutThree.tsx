import SectionTitle from "@/components/ui/sectionTitle"
import { SuHands } from "@/lib/icons"
import AboutVideoPopup from "./aboutVideoPopup"
import { Link } from "react-router-dom"

const AboutThree = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="about-image">
                                <div className="shape-image">
                                    <img src="/img/about/shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" alt="Equipe DRONELÉTRICA - Especialistas em elétrica e automação" />
                                <AboutVideoPopup/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>SOBRE NÓS</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Bem-vindo à DRONELÉTRICA</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Especialistas em soluções elétricas, automação, CFTV e sistemas de segurança. <br /> Atendemos residências, comércios, prédios e shoppings com qualidade e segurança.
                                </p>
                                <div className="icon-area wow slideUp" data-delay=".7">
                                    <ul className="list">
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Instalações elétricas e automação
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Padrão LIGHT e aumento de carga
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            CFTV e centrais de alarme
                                        </li>
                                    </ul>
                                    <div className="icon-items">
                                        <div className="icon">
                                           <SuHands/>
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <span className="count">500</span>+
                                            </h2>
                                            <span>Projetos Realizados</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="about-button wow slideUp" data-delay=".8">
                                        <Link to="#services" className="theme-btn">
                                            Ver serviços
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                    <div className="author-icon wow slideUp" data-delay=".9">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone" />
                                        </div>
                                        <div className="content">
                                            <span>Orçamento sem compromisso</span>
                                            <h5>
                                                <Link to="tel:+5500000000000">WhatsApp</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutThree