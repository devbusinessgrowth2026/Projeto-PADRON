import { Link } from "react-router-dom"

const NewsLetterTwo = () => {
    return (
        <div className="cta-banner-2 section-padding-sm">
            <div className="container">
                <div className="cta-wrapper-2">
                    <div className="author-icon">
                        <div className="icon">
                            <i className="fa-solid fa-phone" />
                        </div>
                        <div className="content">
                            <span>Fale conosco</span>
                            <h4>
                                <a href="https://api.whatsapp.com/send?phone=5521964937618&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Padron%20el%C3%A9trica" target="_blank" rel="noopener noreferrer">+55 21 96493-7618</a>
                            </h4>
                        </div>
                    </div>
                    <h3>
                        Orçamento sem compromisso<br /> pelo WhatsApp
                    </h3>
                    <Link to="/#contact" className="theme-btn bg-white">
                        Solicitar orçamento
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterTwo