import PageTitle from "@/components/sections/pageTitle"
import ServiceCard from "@/components/sections/services/serviceCard"
import { serviceOneData } from "@/db/serviceOneData"

const Service = () => {
    return (
        <>
            <PageTitle title="Serviços" currentPage="Serviços" />
            <section className="service-section fix section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow slideUp">Menu de serviços</span>
                        <h2 className="wow slideUp" data-delay=".3">
                            MENU DE SERVIÇOS
                        </h2>
                        <p className="wow slideUp" data-delay=".4" style={{ marginTop: '12px', opacity: 0.9 }}>
                            Elétrica predial, comercial, automação, CFTV, porteiro eletrônico, aumento de carga, padrão light
                        </p>
                    </div>
                    <div className="service-wrapper mb-0">
                        <div className="row justify-content-center">
                            {
                                serviceOneData.map((service) => (
                                    <div key={service.id} className="col-xl-4 col-lg-4 col-md-6 wow slideUp" data-delay=".3">
                                        <ServiceCard service={service} className="box-shadow" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service