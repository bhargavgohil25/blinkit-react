import { createSelector } from "reselect";
import { selectProductEntities } from "./products";

// get cart entities
export const selectCartEntities = (state) => state.carts;

// select total cost of the cart
export const selectCartTotalCost = createSelector(
  selectProductEntities,
  selectCartEntities,
  // output selector
  (products, cart) => {
    return Object.entries(cart).reduce(
      (totalCost, [productId, { productCount }]) => {
        const product = products[productId];
        const itemCost = product.discountedPrice * productCount;
        return totalCost + itemCost;
      },
      0
    );
  }
);

// select total discounted cost
export const selectTotalDiscount = createSelector(
  selectProductEntities,
  selectCartEntities,
  // output selector
  (products, cart) => {
    return Object.entries(cart).reduce(
      (totalDiscount, [productId, { productCount }]) => {
        const product = products[productId];
        const originalCost = product.actualPrice * productCount;
        const discountedCost = product.discountedPrice * productCount;

        return totalDiscount + (originalCost - discountedCost);
      },
      0
    );
  }
);

// select total original cart cost
export const selectTotalOriginalCost = createSelector(
  selectProductEntities,
  selectCartEntities,
  // output selector
  (products, cart) => {
    return Object.entries(cart).reduce(
      (totalOriginal, [productId, { productCount }]) => {
        const product = products[productId];
        const originalCost = product.actualPrice * productCount;

        return totalOriginal + originalCost;
      },
      0
    );
  }
);

// select total number of products in the cart
export const selectCartTotalProductCount = createSelector(
  selectCartEntities,
  // output selector
  (cart) => {
    return Object.entries(cart).reduce(
      (totalProductCount, [productId, { productCount }]) => {
        return totalProductCount + productCount;
      },
      0
    );
  }
);

// select product count
export const selectProductCount = (state, productId) => {
  return state.carts[productId]?.productCount || 0;
};

// get product Id's from the cart
export const selectProductsInCart = createSelector(
  selectCartEntities,
  (products) => Object.keys(products)
);
