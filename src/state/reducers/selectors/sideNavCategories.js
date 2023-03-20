import { createSelector } from "reselect";

const selectSideNavCategoryEntities = (state) =>
  state.sideNavCategories.entities;

export const selectSideNavCategories = createSelector(
  // input selector
  selectSideNavCategoryEntities,
  // output selector
  (entities) => Object.values(entities)
);

export const selectSideNavCategoryIds = createSelector(
  selectSideNavCategories,
  (sideNavCategories) =>
    sideNavCategories.map((sideNavCategory) => sideNavCategory.categoryId)
);

export const selectSideNavCategoryById = (state, categoryId) => {
  return selectSideNavCategoryEntities(state)[categoryId];
};

export const selectCurrentSideNavCategoryId = (state) => {
  return state.sideNavCategories.currentSideNavCategoryId;
};
