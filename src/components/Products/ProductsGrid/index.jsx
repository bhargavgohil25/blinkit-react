import ProductCard from "../ProductCard";
import "./ProductsGrid.style.css";
import { useSelector } from "react-redux";
import { selectProductsIdByCategoryId } from "../../../state/reducers/productsReducer";
import { selectCurrentSideNavCategoryId } from "../../../state/reducers/sideNavCategoriesReducer";

const ProductsGrid = () => {
  const currentCategoryId = useSelector((state) =>
    selectCurrentSideNavCategoryId(state)
  );
  const productsIds = useSelector((state) =>
    selectProductsIdByCategoryId(state, currentCategoryId)
  );

  return (
    <div className="products">
      {productsIds.length > 0 &&
        productsIds.map((productId) => {
          return <ProductCard productId={productId} key={productId} />;
        })}
    </div>
  );
};

export default ProductsGrid;
