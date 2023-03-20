import ACTION_TYPE from "../action-types";

const initialState = {};

/*
  state = {
    <PRODUCT_ID>: {
      productCount: <PRODUCT_COUNT>,
    },
    <PRODUCT_ID>: {
      productCount: <PRODUCT_COUNT>,
    },
  }
*/

export default function cartsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.PRODUCT_ADDED_TO_CART: {
      const productId = action.payload;
      if (state[productId]) {
        return {
          ...state,
          [productId]: {
            productCount: state[productId].productCount + 1,
          },
        };
      } else {
        return {
          ...state,
          [productId]: {
            productCount: 1,
          },
        };
      }
    }
    case ACTION_TYPE.PRODUCT_REMOVED_FROM_CART: {
      const productId = action.payload;
      if (state[productId]) {
        if (state[productId].productCount > 1) {
          return {
            ...state,
            [productId]: {
              productCount: state[productId].productCount - 1,
            },
          };
        } else {
          const newState = { ...state };
          delete newState[productId];
          return newState;
        }
      }
      return state;
    }

    default:
      return state;
  }
}
