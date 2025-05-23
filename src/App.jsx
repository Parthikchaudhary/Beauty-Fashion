import { Routes, Route } from "react-router-dom";
import APPLayout from "./components/layout/UI/AppLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Fragrance } from "./pages/fragrance";
import { Luxe } from "./pages/Luxe";
import { Beauty } from "./pages/Beauty";
import { ProductDetails } from "./pages/ProductsSection/ProductDetails";
import { Error } from "./pages/Error";
import { Scrool } from "./components/Scrool";

const App = () => {
  return (
    <>
      <Scrool />
      <Routes>
        <Route element={<APPLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/fragrance" element={<Fragrance />} />
          <Route path="/luxe" element={<Luxe />} />
          <Route path="/beauty" element={<Beauty />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
