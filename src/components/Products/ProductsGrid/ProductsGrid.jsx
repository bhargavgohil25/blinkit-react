import ProductCard from "../ProductCard/ProductCard";
import "./ProductsGrid.style.css";
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

export default ProductsGrid;
