import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ScrollToTop } from "./compontent/la/ScrollToTop"

export const Layout=()=>{
    return(
        <>
            <ScrollToTop/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
} 
