import { EditCategoryDataConstants, SignInConstants } from "../constants";

const initialState = {
  data: {},
};

export const EditCategoryDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case EditCategoryDataConstants.EDIT_CATEGORY_DATA_LOADING:
      return { ...state, type: "loading" };
    case EditCategoryDataConstants.EDIT_CATEGORY_DATA_SUCCESS:
      return { ...state, type: "success", data: payload };
    case EditCategoryDataConstants.EDIT_CATEGORY_DATA_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
