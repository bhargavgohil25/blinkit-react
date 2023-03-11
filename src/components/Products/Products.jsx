import ProductsGrid from "./ProductsGrid/ProductsGrid";
import "./Products.style.css";
import PropTypes from "prop-types";

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

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addClickHandler: PropTypes.func.isRequired,
  removeClickHandler: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    cartQuantity: PropTypes.number,
    totalCartCost: PropTypes.number,
  }),
};

Products.defaultProps = {
  cart: {
    cartQuantity: 0,
    totalCartCost: 0,
  },
};

export default Products;
