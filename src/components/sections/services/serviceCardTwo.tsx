import { ServiceDataType } from "@/db/serviceOneData"
import { Link } from "react-router-dom"

const ServiceCardTwo = ({ service }: { service: ServiceDataType }) => {
    return (
        <div className="service-card-items">
            <div className="service-image">
                <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                    }}
                />
            </div>
            <div className="icon-2">
                <img src={service.icon} alt="img" />
            </div>
            <div className="service-content">
                <div className="icon">
                    <img src={service.icon} alt="img" />
                </div>
                <h4>
                    <Link to={service.link}>
                        {service.title}
                        {service.subtitle && (
                            <>
                                <br />
                                <span className="service-card-subtitle">{service.subtitle}</span>
                            </>
                        )}
                    </Link>
                </h4>
                <p>{service.description}</p>
                <Link to={service.link} className="theme-btn-2 mt-3">
                    Saiba mais
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCardTwo