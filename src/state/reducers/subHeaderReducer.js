import ACTION_TYPE from "../action-types";

const initialState = {
  status: "idle",
  entities: {},
};

export default function subHeaderCategoriesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case ACTION_TYPE.SUB_HEADER_CATEGORIES_LOADED: {
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
    case ACTION_TYPE.SUB_HEADER_CATEGORIES_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }

    default:
      return state;
  }
}
