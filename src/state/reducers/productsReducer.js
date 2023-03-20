import ACTION_TYPE from "../action-types";

const initialState = {
  status: "idle",
  order: "Relevance",
  entities: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.PRODUCTS_LOADED:
      const newProducts = {};

      action.payload.forEach((product) => {
        newProducts[product.productId] = product;
      });

      return {
        ...state,
        status: "idle",
        entities: newProducts,
      };

    case ACTION_TYPE.PRODUCTS_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case ACTION_TYPE.PRODUCTS_ORDER_CHANGE:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
}
