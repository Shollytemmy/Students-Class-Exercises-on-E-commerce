import { Link, useParams } from "react-router"
import { useEffect, useState } from "react";
import Loading from "./Loading";
function Product() {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const {productId} = useParams();

const ApiUrl = `https://fakestoreapi.com/products/${productId}`;


    const fetchProduct = async () => {
        setIsLoading(true);
        const response = await fetch(ApiUrl)
        let data = await response.json()
        setProduct(data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchProduct();

    }, [])

   



    
if(isLoading) {
    return <Loading />
}
  return (
      <>
          <div className="">
              <Link to="/products" className="back-button">
                &larr; Back to Products
              </Link>
          </div>
      <div className="product-item">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">
          ${product.price ? product.price.toFixed(2) : "N/A"}
        </p>
      </div>
    </>
  );
}

export default Product
