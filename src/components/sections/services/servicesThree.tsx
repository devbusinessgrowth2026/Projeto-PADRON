import { serviceThreeData } from "@/db/serviceThreeData"
import NewsLetterTwo from "../newsLetterTwo"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const ServicesThree = () => {
    return (
        <section id="services" className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Menu de serviços</SectionTitle.SubTitle>
                        <SectionTitle.Title>Soluções em Elétrica, Automação<br />CFTV e Alarmes</SectionTitle.Title>
                    </SectionTitle>
                    <Link to="/service" className="theme-btn">
                        Ver todos os serviços
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    {serviceThreeData.slice(0, 4).map((service) => (
                        <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                            <ServiceCardTwo service={service} />
                        </div>
                    ))}
                </div>
            </div>
            <NewsLetterTwo />
        </section>

    )
}

export default ServicesThree