import {
  GetAllCategoriesConstants,
  GetAllSubCategoriesConstants,
} from "../constants";

const initialState = {
  data: [],
};

export const GetAllSubCategoriesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GetAllSubCategoriesConstants.GET_ALL_SUB_CATEGORIES_LOADING:
      return { ...state, type: "loading" };
    case GetAllSubCategoriesConstants.GET_ALL_SUB_CATEGORIES_SUCCESS:
      return { ...state, type: "success", res: payload };
    case GetAllSubCategoriesConstants.GET_ALL_SUB_CATEGORIES_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
