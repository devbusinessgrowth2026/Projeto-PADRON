import { Link } from "react-router-dom"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import TopHeaderOne from "./topHeaderOne"
import useSticky from "@/hooks/useSticky"

const HeaderOne = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <TopHeaderOne />
            <div id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''} `}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main style-2">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <img src="https://ydjnshjgpsyzvaxwgoca.supabase.co/storage/v1/object/sign/Padron%20Prejeto/Capa_Orcamento_1_paint.jpg-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2Y5YzQ2Yy04NDY3LTQxMTgtOGZhNC1kYWE0ODU1NmEwY2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQYWRyb24gUHJlamV0by9DYXBhX09yY2FtZW50b18xX3BhaW50LmpwZy1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTc3MTA3NTA4MywiZXhwIjoxODM0MTQ3MDgzfQ.tfjHqj1vBiDBmj-c7zGMHMiRb_HgD7Hzuka14wThbXM" alt="Padron" className="site-logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/contact" className="theme-btn">
                                        <span>
                                            Orçamento s/ compromisso{' '}
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-xl-block my-auto">
                                    <ExtraInfoOffcanvas />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderOne