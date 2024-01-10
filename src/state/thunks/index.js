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

  const { products } = await fetchJsonData(
    "https://run.mocky.io/v3/2943e73b-3f74-42c8-9e3a-54ff52385889"
  );
  dispatch(productsLoaded(products));
};

export const fetchSideNavCategories = () => async (dispatch) => {
  dispatch(sideNavCategoriesLoading());
  const { sideNavCategories: categories } = await fetchJsonData(
    "https://run.mocky.io/v3/0fb7af1d-972d-41c7-a378-3075925c526b"
  );
  dispatch(sideNavCategoriesLoaded(categories));
};

export const fetchSubHeaderCategories = () => async (dispatch) => {
  dispatch(subHeaderCategoriesLoading());
  const { subHeaderCategories: categories } = await fetchJsonData(
    "https://run.mocky.io/v3/f65bddfe-5321-4660-bb9e-9b7f43093252"
  );
  dispatch(subHeaderCategoriesLoaded(categories));
};
