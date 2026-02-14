import Footer from '@/components/sections/footer'
import HeaderOne from '@/components/headers/headerOne'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useAnimation from '@/hooks/useAnimation';

const RootLayout = () => {
    useAnimation()
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '')
            const el = document.getElementById(id)
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
            }
        }
    }, [hash])

    return (
        <>
            <HeaderOne />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout