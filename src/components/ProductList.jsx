import { Link } from "react-router";

function ProductList({product}) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
       <img src={product.image} />
      <h3>{product.title}</h3>
      <p className="description">{product.description}</p>
      <p className="price">${product.price ? product.price.toFixed(2) : "N/A"}</p>
      <div className="btn-click">
        <button className="add-2-cart">Add to Cart</button>
      </div>
      </Link>
    </div>
  );
}

export default ProductList
