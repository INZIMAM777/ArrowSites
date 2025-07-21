import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./component/layout/Layout"
import { Home } from "./pages/Home"
import { SearchPage } from "./pages/SearchPage"


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
          path: '/SearchPage',
          element:<SearchPage />
        },
        {
          path: '/Cards',
          element:<Cards />'Compone'
        },

      ]

    }
  ])
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}