import {
  EditCategoryDataConstants,
  EditSubCategoryDataConstants,
  SignInConstants,
} from "../constants";

const initialState = {
  data: {},
};

export const EditSubCategoryDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case EditSubCategoryDataConstants.EDIT_SUB_CATEGORY_DATA_LOADING:
      return { ...state, type: "loading" };
    case EditSubCategoryDataConstants.EDIT_SUB_CATEGORY_DATA_SUCCESS:
      return { ...state, type: "success", data: payload };
    case EditSubCategoryDataConstants.EDIT_SUB_CATEGORY_DATA_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
