import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./component/layout/Layout"

export const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      errorElement: <h1>Page Not Found</h1>,
      children:[
        {
          path: '/',
          e
        }
      ]

    }
  ])
  return(
    <>
      <Layout/>
    </>
  )
}