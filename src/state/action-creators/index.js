import ActionType from "../action-types";

/* Action Creators for Products */
export const productsLoading = () => ({
  type: ActionType.PRODUCTS_LOADING,
});

export const productsLoaded = (products) => ({
  type: ActionType.PRODUCTS_LOADED,
  payload: products,
});

/* Action Creators for Side Nav Categories */
export const sideNavCategoriesLoading = () => ({
  type: ActionType.SIDE_NAV_CATEGORIES_LOADING,
});

export const sideNavCategoriesLoaded = (categories) => ({
  type: ActionType.SIDE_NAV_CATEGORIES_LOADED,
  payload: categories,
});

export const sideNavCurrentCategoryChanged = (categoryId) => ({
  type: ActionType.SIDE_NAV_CURRENT_CATEGORY_CHANGED,
  payload: categoryId,
});

/* Action Creators for Cart */
export const addProductToCart = (productId) => {
  return {
    type: ActionType.PRODUCT_ADDED_TO_CART,
    payload: productId,
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: ActionType.PRODUCT_REMOVED_FROM_CART,
    payload: productId,
  };
};

/* Action Creators for sub-header categories */
