import { createSelector } from "reselect";
import { SORTING_ORDER } from "../../../assets/constants";

export const selectProductEntities = (state) => state.products.entities;

export const selectProducts = createSelector(
  // input selectors
  selectProductEntities,
  (state) => state.products.order,
  // output selector
  (entities, order) => {
    const products = Object.values(entities);
    if (order === SORTING_ORDER.LOWEST_PRICE) {
      return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (order === SORTING_ORDER.HIGHEST_PRICE) {
      return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else {
      return products;
    }
  }
);

export const selectCurrentOrder = (state) => {
  return state.products.order;
};

export const selectProductById = (state, productId) => {
  return selectProductEntities(state)[productId];
};

// select all products of a categoryId
export const selectProductsIdByCategoryId = (state, categoryId) => {
  const products = selectProducts(state);
  return products
    .filter((product) => product.categoryId === categoryId)
    .map((product) => product.productId);
};
