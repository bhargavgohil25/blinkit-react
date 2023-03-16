import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import sideNavCategoriesReducer from "./sideNavCategoriesReducer";
import cartsReducer from "./cartsReducer";

const reducers = combineReducers({
  products: productsReducer,
  sideNavCategories: sideNavCategoriesReducer,
  carts: cartsReducer,
});

export default reducers;
