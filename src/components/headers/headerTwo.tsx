import { Link } from "react-router-dom"
import TopHeaderOne from "./topHeaderOne"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"

const HeaderTwo = () => {
    const [isSticky] = useSticky()
    return (
        <header className="header-section-2">
            <TopHeaderOne className="top-style-2" wrapperClass="style-2" />
            <div id="header-sticky" className={`header-2 ${isSticky ? 'sticky' : ''}`}>
                <div className="main-logo">
                    <Link to="/">
                        <img src="https://ydjnshjgpsyzvaxwgoca.supabase.co/storage/v1/object/sign/Padron%20Prejeto/Capa_Orcamento_1_paint.jpg-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2Y5YzQ2Yy04NDY3LTQxMTgtOGZhNC1kYWE0ODU1NmEwY2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQYWRyb24gUHJlamV0by9DYXBhX09yY2FtZW50b18xX3BhaW50LmpwZy1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTc3MTA3NTA4MywiZXhwIjoxODM0MTQ3MDgzfQ.tfjHqj1vBiDBmj-c7zGMHMiRb_HgD7Hzuka14wThbXM" alt="Padron - Elétrica, Automação, CFTV" className="site-logo" />
                    </Link>
                </div>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-none">
                                <Link to="/" className="header-logo">
                                    <img src="https://ydjnshjgpsyzvaxwgoca.supabase.co/storage/v1/object/sign/Padron%20Prejeto/Capa_Orcamento_1_paint.jpg-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2Y5YzQ2Yy04NDY3LTQxMTgtOGZhNC1kYWE0ODU1NmEwY2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQYWRyb24gUHJlamV0by9DYXBhX09yY2FtZW50b18xX3BhaW50LmpwZy1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTc3MTA3NTA4MywiZXhwIjoxODM0MTQ3MDgzfQ.tfjHqj1vBiDBmj-c7zGMHMiRb_HgD7Hzuka14wThbXM" alt="Padron" className="site-logo" />
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/contact" className="theme-btn">
                                        <span>
                                            free Consultancy
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
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

export default HeaderTwo