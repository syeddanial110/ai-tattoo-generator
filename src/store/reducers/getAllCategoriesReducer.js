import { GetAllCategoriesConstants, SignInConstants } from "../constants";

const initialState = {
  data: [],
};

export const GetAllCategoriesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GetAllCategoriesConstants.GET_ALL_CATEGORIES_LOADING:
      return { ...state, type: "loading" };
    case GetAllCategoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, type: "success", res: payload };
    case GetAllCategoriesConstants.GET_ALL_CATEGORIES_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
