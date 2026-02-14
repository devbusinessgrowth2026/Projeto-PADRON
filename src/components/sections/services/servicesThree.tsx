import { serviceThreeData } from "@/db/serviceThreeData"
import NewsLetterTwo from "../newsLetterTwo"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"

const ServicesThree = () => {
    return (
        <section id="services" className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Menu de serviços</SectionTitle.SubTitle>
                        <SectionTitle.Title>Soluções em Elétrica, Automação<br />CFTV e Alarmes</SectionTitle.Title>
                    </SectionTitle>
                </div>
                <div className="row">
                    {serviceThreeData.map((service) => (
                        <div key={service.id} className="col-xl-4 col-lg-4 col-md-6">
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