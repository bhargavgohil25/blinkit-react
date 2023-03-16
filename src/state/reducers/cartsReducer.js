import ActionType from "../action-types";

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
    case ActionType.PRODUCT_ADDED_TO_CART: {
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
    case ActionType.PRODUCT_REMOVED_FROM_CART: {
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

// select total cost of the cart
export const selectCartTotalCost = (state) => {
  const products = state.products.entities;
  const cart = state.carts;
  let totalCost = 0;
  for (const productId in cart) {
    totalCost +=
      products[productId].discountedPrice * cart[productId].productCount;
  }
  return totalCost;
};

// select total number of products in the cart
export const selectCartTotalProductCount = (state) => {
  const cart = state.carts;
  let totalProductCount = 0;
  for (const productId in cart) {
    totalProductCount += cart[productId].productCount;
  }
  return totalProductCount;
};

// select product count
export const selectProductCount = (state, productId) => {
  return state.carts[productId]?.productCount || 0;
};
