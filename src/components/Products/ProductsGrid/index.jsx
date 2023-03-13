import ProductCard from "../ProductCard";
import "./ProductsGrid.style.css";
import PropTypes from "prop-types";

const ProductsGrid = ({
  products,
  addClickHandler,
  removeClickHandler,
  cart,
}) => {
  return (
    <div className="products">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <ProductCard
              productCount={cart[product.productId]?.productCount || 0}
              key={product.productId}
              product={product}
              addClickHandler={addClickHandler}
              removeClickHandler={removeClickHandler}
            />
          );
        })}
    </div>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
  addClickHandler: PropTypes.func.isRequired,
  removeClickHandler: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    cartQuantity: PropTypes.number,
    totalCartCost: PropTypes.number,
  }),
};

export default ProductsGrid;
