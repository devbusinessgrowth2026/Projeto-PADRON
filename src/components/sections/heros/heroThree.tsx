import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from "motion/react"
import { Link } from "react-router-dom";

const heroSlides = [
    {
        id: 1,
        image: '/img/hero/padron-hero.jpg',
        title: 'PADRON - Elétrica, Automação e CFTV',
        link: '#services',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
        title: 'Padrão LIGHT, Aumento de Carga e Centrais de Alarme',
        link: '#services',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80',
        title: 'Soluções Completas em Elétrica e Automação',
        link: '#contact',
    },
];
const HeroThree = () => {
    return (
        <section className="hero-section hero-3">
            <div className="array-button">
                <button className="array-prev"><i className="fa fa-arrow-left" /></button>
                <button className="array-next"><i className="fa fa-arrow-right" /></button>
            </div>
            <Swiper
                loop={true}
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot-2",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                }}
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id} >

                        {(({ isActive }) => (
                            <>
                                <div
                                    className="hero-image bg-cover"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                                className="hero-content text-center"
                                            >
                                                <motion.h1
                                                    className="text-white"
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.3,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    {slide.title}
                                                </motion.h1>
                                                <motion.div
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.5,
                                                        ease: 'linear',
                                                    }}
                                                    className="hero-button"
                                                >
                                                    <Link
                                                        to={slide.link}
                                                        className="theme-btn hover-white"
                                                    >
                                                        Ver nossos serviços
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >

    )
}

export default HeroThree