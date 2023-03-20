import ProductsGrid from "./ProductsGrid";
import "./Products.style.css";
import { useSelector } from "react-redux";
import {
  selectCurrentSideNavCategoryId,
  selectSideNavCategoryById,
} from "../../state/reducers/sideNavCategoriesReducer";
import { SORTING_ORDER } from "../../assets/constants.js";
import { selectCurrentOrder } from "../../state/reducers/productsReducer";
import { useActions } from "../../hooks/useActions";

const Products = () => {
  const { productsOrderChange } = useActions();

  const currentCategoryId = useSelector((state) =>
    selectCurrentSideNavCategoryId(state)
  );
  const category = useSelector((state) =>
    selectSideNavCategoryById(state, currentCategoryId)
  );
  const currentOrder = useSelector((state) => selectCurrentOrder(state));

  const handleSelectChange = (event) => {
    productsOrderChange(event.target.value);
  };

  return (
    <div className="products__section">
      <div className="product__header">
        <div className="product__title">
          Buy {category?.categoryName} Online
        </div>
        <div className="product__sort">
          <label>Sort By</label>
          <select
            className="sort__select"
            value={currentOrder}
            onChange={handleSelectChange}
          >
            {Object.values(SORTING_ORDER).map((order) => (
              <option key={order} value={order}>
                {order}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ProductsGrid />
    </div>
  );
};

export default Products;
