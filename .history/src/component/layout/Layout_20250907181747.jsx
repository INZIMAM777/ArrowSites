import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ScrollToTop } from "./ScrollToTop"
import { useState } from "react"

export const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    return (
        <>
            <ScrollToTop/>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            <Outlet context={{ isDarkMode, setIsDarkMode }} />
            <Footer isDarkMode={isDarkMode}/>
        </>
    )
}