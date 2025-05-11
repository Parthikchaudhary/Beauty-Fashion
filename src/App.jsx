import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {Products} from "./pages/Products";
import APPLayout from "./components/layout/UI/AppLayout";
import { Error } from "./Pages/Error";
import { Fragrance } from "./pages/fragrance";
import { Luxe } from "./pages/Luxe";
import { ProductDetails } from "./pages/ProductsSection/ProductDetails"
import { Beauty } from "./pages/Beauty";




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <APPLayout />,
      errorElement: <Error/>,
      children : [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/product",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <ProductDetails />
        },
        {
          path:"/fragrance",
          element: <Fragrance />
        },
        {
          path:"/luxe",
          element: <Luxe/>
        },
        {
          path:"/beauty",
          element: <Beauty/>
        },
      ]

    },
  ])
  return <RouterProvider router={router} />
}

export default App;