import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./component/layout/Layout"
import { Home } from "./component/page/Layout"

export const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      errorElement: <h1>Page Not Found</h1>,
      children:[
        {
          path: '/',
          element:<Home />
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