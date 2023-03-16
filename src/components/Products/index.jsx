import ProductsGrid from "./ProductsGrid";
import "./Products.style.css";
import { useSelector } from "react-redux";
import {
  selectCurrentSideNavCategoryId,
  selectSideNavCategoryById,
} from "../../state/reducers/sideNavCategoriesReducer";

const Products = () => {
  const currentCategoryId = useSelector((state) =>
    selectCurrentSideNavCategoryId(state)
  );
  const category = useSelector((state) =>
    selectSideNavCategoryById(state, currentCategoryId)
  );

  return (
    <div className="products__section">
      <div className="product__header">Buy {category?.categoryName} Online</div>
      <ProductsGrid />
    </div>
  );
};

export default Products;
