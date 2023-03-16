import { createSelector } from "reselect";
import ActionType from "../action-types";

const initialState = {
  status: "idle",
  entities: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.PRODUCTS_LOADED:
      const newProducts = {};

      action.payload.forEach((product) => {
        newProducts[product.productId] = product;
      });

      return {
        ...state,
        status: "idle",
        entities: newProducts,
      };

    case ActionType.PRODUCTS_LOADING:
      return {
        ...state,
        status: "loading",
      };

    default:
      return state;
  }
}

const selectProductsEntities = (state) => state.products.entities;

export const selectProducts = createSelector(
  // input selector
  selectProductsEntities,
  // output selector
  (entities) => Object.values(entities)
);

export const selectProductById = (state, productId) => {
  return selectProductsEntities(state)[productId];
};

// select all products of a categoryId
export const selectProductsIdByCategoryId = (state, categoryId) => {
  const products = selectProducts(state);
  return products
    .filter((product) => product.categoryId === categoryId)
    .map((product) => product.productId);
};
