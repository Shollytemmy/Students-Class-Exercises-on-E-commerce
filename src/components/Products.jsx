import ProductList from "./ProductList";


const Products = ({ products }) => {
  return (
      <div className="products-container">
        {products.map((product) => <ProductList key={product.id} product={product} />

        )}
      </div>
   
  );
};

export default Products
