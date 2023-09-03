import ACTION_TYPE from "../action-types";

const initialState = {
  status: "idle",
  entities: {},
  currentSideNavCategoryId: "DAIRY_PRODUCTS",
};

export default function sideNavCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SIDE_NAV_CATEGORIES_LOADED:
      const newSideNavCategories = {};

      action.payload.forEach((sideNavCategory) => {
        newSideNavCategories[sideNavCategory.categoryId] = sideNavCategory;
      });

      return {
        ...state,
        status: "idle",
        entities: newSideNavCategories,
      };

    case ACTION_TYPE.SIDE_NAV_CATEGORIES_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case ACTION_TYPE.SIDE_NAV_CURRENT_CATEGORY_CHANGED:
      return {
        ...state,
        currentSideNavCategoryId: action.payload,
      };

    default:
      return state;
  }
}
