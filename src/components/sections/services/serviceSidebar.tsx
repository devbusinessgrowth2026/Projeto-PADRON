import { Link } from "react-router-dom";

const services = [
    { name: 'Cleaning Solution', link: '/service-details' },
    { name: 'Plumbing Solution', link: '/service-details' },
    { name: 'Air Conditioning', link: '/service-details', active: true },
    { name: 'Electricity Solution', link: '/service-details' },
    { name: 'Mechanic Solution', link: '/service-details' },
];

const openingHours = [
    { day: 'Mon - Sat', time: '10.00 AM - 4.00 PM' },
    { day: 'Sun', time: '09.00 AM - 4.00 PM' },
    { day: 'Friday', time: 'Closed' },
    { day: 'Emergency', time: '24 hours' },
];

const ServiceSidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>All Services</h3>
                </div>
                <div className="widget-categories">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index} className={service.active ? 'active' : ''}>
                                <Link to={service.link}>{service.name}</Link>
                                <i className="fa-solid fa-arrow-right-long" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Opening Hours</h3>
                </div>
                <div className="opening-category">
                    <ul>
                        {openingHours.map((hour, index) => (
                            <li key={index}>
                                <i className="fa-regular fa-clock" />
                                {hour.day}: {hour.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("/img/service/post.jpg")' }}>
                <div className="contact-text">
                    <div className="icon">
                        <i className="fa-solid fa-phone" />
                    </div>
                    <h4>Need Help? Call Here</h4>
                    <h5>
                        <a href="https://api.whatsapp.com/send?phone=5521964937618&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Padron%20el%C3%A9trica" target="_blank" rel="noopener noreferrer">+55 21 96493-7618</a>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;