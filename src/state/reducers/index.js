import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import sideNavCategoriesReducer from "./sideNavCategoriesReducer";
import cartsReducer from "./cartsReducer";
import subHeaderCategoriesReducer from "./subHeaderReducer";

const reducers = combineReducers({
  products: productsReducer,
  sideNavCategories: sideNavCategoriesReducer,
  carts: cartsReducer,
  subHeaderCategories: subHeaderCategoriesReducer,
});

export default reducers;
