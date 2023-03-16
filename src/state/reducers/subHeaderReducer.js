import { createSelector } from "reselect";
import ActionType from "../action-types";

const initialState = {
  status: "idle",
  entities: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SUB_HEADER_CATEGORIES_LOADED: {
      const newSubHeaderCategories = {};
      action.payload.forEach((category) => {
        newSubHeaderCategories[category.categoryId] = category;
      });

      return {
        ...state,
        status: "idle",
        entities: newSubHeaderCategories,
      };
    }
    case ActionType.SUB_HEADER_CATEGORIES_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }

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
