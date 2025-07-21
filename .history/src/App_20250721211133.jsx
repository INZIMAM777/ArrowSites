import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./component/layout/Layout"
import { Home } from "./pages/Home"
import { SearchPage } from "./pages/SearchPage"
import { Cards } from "./pages/Cards"
import { ErrorHandle } from "./component/layout/ErrorHandle"
// import { getProperties } from "./api/Getproperties"


export const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      errorElement: <ErrorHandle/>,
      children:[
        {
          path: '/',
          element:<Home />
        },
         {
          path: '/About',
          element:<SearchPage />
        },
         {
          path: '/SearchPage',
          element:<SearchPage />
        },
        {
          path: '/SearchPage',
          element:<SearchPage />
        },
        {
          path: '/Cards',
          element:<Cards />,
          // loader: getProperties,
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