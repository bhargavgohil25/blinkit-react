import ProductCard from "../ProductCard";
import "./ProductsGrid.style.css";
import { useSelector } from "react-redux";
import { selectProductsIdByCategoryId } from "../../../state/reducers/selectors/products";
import { selectCurrentSideNavCategoryId } from "../../../state/reducers/selectors/sideNavCategories";

const ProductsGrid = () => {
  const currentCategoryId = useSelector((state) =>
    selectCurrentSideNavCategoryId(state)
  );
  const productIds = useSelector((state) =>
    selectProductsIdByCategoryId(state, currentCategoryId)
  );

  return (
    <div className="products">
      {productIds.length > 0 &&
        productIds.map((productId) => {
          return <ProductCard productId={productId} key={productId} />;
        })}
    </div>
  );
};

export default ProductsGrid;
