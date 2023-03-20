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
