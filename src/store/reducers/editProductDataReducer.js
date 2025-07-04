import {
  EditCategoryDataConstants,
  EditProductsConstants,
  SignInConstants,
} from "../constants";

const initialState = {
  data: {},
};

export const EditProductDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case EditProductsConstants.EDIT_PRODUCTS_DATA_LOADING:
      return { ...state, type: "loading" };
    case EditProductsConstants.EDIT_PRODUCTS_DATA_SUCCESS:
      return { ...state, type: "success", data: payload };
    case EditProductsConstants.EDIT_PRODUCTS_DATA_ERROR:
      return { ...state, type: "error" };
    default:
      return state;
  }
};
