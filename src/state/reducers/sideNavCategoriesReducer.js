import { createSelector } from "reselect";
import ActionType from "../action-types";

const initialState = {
  status: "idle",
  entities: {},
  currentSideNavCategoryId: "DAIRY_PRODUCTS",
};

export default function sideNavCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SIDE_NAV_CATEGORIES_LOADED:
      const newSideNavCategories = {};

      action.payload.forEach((sideNavCategory) => {
        newSideNavCategories[sideNavCategory.categoryId] = sideNavCategory;
      });

      return {
        ...state,
        status: "idle",
        entities: newSideNavCategories,
      };

    case ActionType.SIDE_NAV_CATEGORIES_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case ActionType.SIDE_NAV_CURRENT_CATEGORY_CHANGED:
      return {
        ...state,
        currentSideNavCategoryId: action.payload,
      };

    default:
      return state;
  }
}

const selectSideNavCategoriesEntities = (state) =>
  state.sideNavCategories.entities;

export const selectSideNavCategories = createSelector(
  // input selector
  selectSideNavCategoriesEntities,
  // output selector
  (entities) => Object.values(entities)
);

export const selectSideNavCategoriesIds = createSelector(
  selectSideNavCategories,
  (sideNavCategories) =>
    sideNavCategories.map((sideNavCategory) => sideNavCategory.categoryId)
);

export const selectSideNavCategoryById = (state, categoryId) => {
  return selectSideNavCategoriesEntities(state)[categoryId];
};

export const selectCurrentSideNavCategoryId = (state) => {
  return state.sideNavCategories.currentSideNavCategoryId;
};
