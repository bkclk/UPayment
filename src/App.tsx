import Home from "./pages/Home/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DetailedProduct from "./pages/DetailedProducts.tsx";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailedProduct />} />
            <Route path="/product/create" element={<CreateProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
