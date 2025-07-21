import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./component/layout/Layout"

export const App=()=>{
  const router=createBrowserRouter
  return(
    <>
      <Layout/>
    </>
  )
}