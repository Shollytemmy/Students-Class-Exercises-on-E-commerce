import { useEffect, useState } from "react";
import Products from "./components/Products";
import './App.css'
import { Route, Routes} from 'react-router'
import Home from "./components/Home";
import About from "./components/About";
import { NavLinks } from "./components/NavLinks";
import Footer from "./components/Footer";
import Product from "./components/Product";
import NotFound from "./components/NotFound";


const ApiUrl = 'https://fakestoreapi.com/products';


function App() {

  const [products, setProducts] = useState([])

  // console.log(products)

  


  useEffect(() => {

    async function fetchProducts() {

    const response = await fetch(ApiUrl)
    let data = await response.json()

    setProducts(data)
  }
    fetchProducts();
  }, [])

  




  return (
    <div className="App">

      <NavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products products={products} />} />
        <Route path="about" element={<About />} />
        <Route path="products/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}



export default App