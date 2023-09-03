import { createSelector } from "reselect";

const selectSubHeaderCategoryEntities = (state) =>
  state.subHeaderCategories.entities;

export const selectSubHeaderCategories = createSelector(
  // input selector
  selectSubHeaderCategoryEntities,
  // output selector
  (entities) => Object.values(entities)
);
