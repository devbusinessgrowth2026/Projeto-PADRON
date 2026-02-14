import RedirectToSection from "@/components/RedirectToSection";
import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import HomeThreeSingle from "@/pages/home-three-single";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomeThreeSingle />,
            },
            {
                path: "about",
                element: <RedirectToSection />,
            },
            {
                path: "service",
                element: <RedirectToSection />,
            },
            {
                path: "service-carousel",
                element: <RedirectToSection />,
            },
            {
                path: "service-details",
                element: <RedirectToSection />,
            },
            {
                path: "project",
                element: <RedirectToSection />,
            },
            {
                path: "project-carousel",
                element: <RedirectToSection />,
            },
            {
                path: "project-details",
                element: <RedirectToSection />,
            },
            {
                path: "team",
                element: <RedirectToSection />,
            },
            {
                path: "team-carousel",
                element: <RedirectToSection />,
            },
            {
                path: "team-details",
                element: <RedirectToSection />,
            },
            {
                path: "pricing",
                element: <RedirectToSection />,
            },
            {
                path: "faq",
                element: <RedirectToSection />,
            },
            {
                path: "404",
                element: <Error />,
            },
            {
                path: "news",
                element: <RedirectToSection />,
            },
            {
                path: "news-standard",
                element: <RedirectToSection />,
            },
            {
                path: "news-details",
                element: <RedirectToSection />,
            },
            {
                path: "contact",
                element: <RedirectToSection />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
])