import ACTION_TYPE from "../action-types";

/* Action Creators for Products */
export const productsLoading = () => ({
  type: ACTION_TYPE.PRODUCTS_LOADING,
});

export const productsLoaded = (products) => ({
  type: ACTION_TYPE.PRODUCTS_LOADED,
  payload: products,
});

export const productsOrderChange = (order) => ({
  type: ACTION_TYPE.PRODUCTS_ORDER_CHANGE,
  payload: order,
});

/* Action Creators for Side Nav Categories */
export const sideNavCategoriesLoading = () => ({
  type: ACTION_TYPE.SIDE_NAV_CATEGORIES_LOADING,
});

export const sideNavCategoriesLoaded = (categories) => ({
  type: ACTION_TYPE.SIDE_NAV_CATEGORIES_LOADED,
  payload: categories,
});

export const changeSideNavCategory = (categoryId) => ({
  type: ACTION_TYPE.SIDE_NAV_CURRENT_CATEGORY_CHANGED,
  payload: categoryId,
});

/* Action Creators for Cart */
export const addProductToCart = (productId) => {
  return {
    type: ACTION_TYPE.PRODUCT_ADDED_TO_CART,
    payload: productId,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: ACTION_TYPE.PRODUCT_REMOVED_FROM_CART,
    payload: productId,
  };
};

/* Action Creators for sub-header categories */
export const subHeaderCategoriesLoading = () => ({
  type: ACTION_TYPE.SUB_HEADER_CATEGORIES_LOADING,
});

export const subHeaderCategoriesLoaded = (categories) => ({
  type: ACTION_TYPE.SUB_HEADER_CATEGORIES_LOADED,
  payload: categories,
});
