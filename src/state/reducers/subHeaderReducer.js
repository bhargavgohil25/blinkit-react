import { createSelector } from "reselect";
import ActionType from "../action-types";

const initialState = {
  status: "idle",
  entities: {},
};

export default function subHeaderCategoriesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case ActionType.SUB_HEADER_CATEGORIES_LOADED: {
      const newSubHeaderCategories = {};
      action.payload.forEach((category) => {
        newSubHeaderCategories[category.categoryId] = category;
      });

      return {
        ...state,
        status: "idle",
        entities: newSubHeaderCategories,
      };
    }
    case ActionType.SUB_HEADER_CATEGORIES_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }

    default:
      return state;
  }
}

const selectSubHeaderCategoriesEntities = (state) =>
  state.subHeaderCategories.entities;

export const selectSubHeaderCategories = createSelector(
  // input selector
  selectSubHeaderCategoriesEntities,
  // output selector
  (entities) => Object.values(entities)
);
