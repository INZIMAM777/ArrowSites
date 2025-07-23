import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ScrollToTop } from "./compontent/layout/ScrollToTop"

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
