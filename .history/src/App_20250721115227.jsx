import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./component/layout/Layout"
import { Home } from "./component/pages/Home"
import { Search } from "./component/pages/Search"


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
        },
        {
          path: '/Search',
          element:<Search />
        }
      ]

    }
  ])
  return(
    <>
      <RouterProvider />
    </>
  )
}