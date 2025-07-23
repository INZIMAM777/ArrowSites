import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./component/layout/Layout";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { Cards } from "./pages/Cards";
import { ErrorHandle } from "./component/layout/ErrorHandle";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
// import { getProperties } from "./api/Getproperties";
import { CardsDetail } from "./component/UI/CardsDetail";
import { getPropertiesDetails } from "./api/GetpropertiesDetail";
// import { getProperties } from "./api/Getproperties"

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorHandle />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/SearchPage",
          element: <SearchPage />,
        },
        {
          path: "/Cards",
          element: <Cards />,
          // loader: getProperties,
        },
        {
          path: "/Cards/:Id",
          element: <CardsDetail />,
          loader: getPropertiesDetails,
        },
        {
          path: "/AddPropr",
          element: <AddPropr />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
