import ProductsGrid from "./ProductsGrid/ProductsGrid";
import "./Products.style.css";

const Products = ({ products, addClickHandler, removeClickHandler, cart }) => {
  return (
    <div className="products__section">
      <div className="product__header">Buy Dairy Products Online</div>
      <ProductsGrid
        products={products}
        addClickHandler={addClickHandler}
        removeClickHandler={removeClickHandler}
        cart={cart}
      />
    </div>
  );
};

export default Products;
