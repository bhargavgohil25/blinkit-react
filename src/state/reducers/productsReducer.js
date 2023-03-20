import { createSelector } from "reselect";
import { SORTING_ORDER } from "../../assets/constants";
import ActionType from "../action-types";

const initialState = {
  status: "idle",
  order: "Relevance",
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

    case ActionType.PRODUCTS_ORDER_CHANGE:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
}

const selectProductEntities = (state) => state.products.entities;

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
