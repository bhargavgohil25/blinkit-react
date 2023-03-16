import {
  productsLoaded,
  productsLoading,
  sideNavCategoriesLoaded,
  sideNavCategoriesLoading,
  subHeaderCategoriesLoaded,
  subHeaderCategoriesLoading,
} from "../action-creators";
import fetchJsonData from "../../api";

export const fetchProducts = () => async (dispatch) => {
  dispatch(productsLoading());
  const { products } = await fetchJsonData("/data/products.json");
  dispatch(productsLoaded(products));
};

export const fetchSideNavCategories = () => async (dispatch) => {
  dispatch(sideNavCategoriesLoading());
  const { sideNavCategories: categories } = await fetchJsonData(
    "/data/sideNavCategories.json"
  );
  dispatch(sideNavCategoriesLoaded(categories));
};

export const fetchSubHeaderCategories = () => async (dispatch) => {
  dispatch(subHeaderCategoriesLoading());
  const { subHeaderCategories: categories } = await fetchJsonData(
    "/data/subHeaderCategories.json"
  );
  dispatch(subHeaderCategoriesLoaded(categories));
};
