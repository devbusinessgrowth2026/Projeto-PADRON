import { Navigate, useLocation } from "react-router-dom"

const pathToSection: Record<string, string> = {
    "/about": "about",
    "/service": "services",
    "/service-carousel": "services",
    "/service-details": "services",
    "/project": "projects",
    "/project-carousel": "projects",
    "/project-details": "projects",
    "/team": "team",
    "/team-carousel": "team",
    "/team-details": "team",
    "/pricing": "pricing",
    "/faq": "faq",
    "/news": "blog",
    "/news-standard": "blog",
    "/news-details": "blog",
    "/contact": "contact",
}

const RedirectToSection = () => {
    const { pathname } = useLocation()
    const section = pathToSection[pathname] ?? ""
    const to = section ? `/#${section}` : "/"
    return <Navigate to={to} replace />
}

export default RedirectToSection
