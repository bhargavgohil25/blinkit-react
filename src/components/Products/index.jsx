import ProductsGrid from "./ProductsGrid";
import "./Products.style.css";

const Products = () => {
  return (
    <div className="products__section">
      <div className="product__header">Buy Dairy Products Online</div>
      <ProductsGrid />
    </div>
  );
};

export default Products;
