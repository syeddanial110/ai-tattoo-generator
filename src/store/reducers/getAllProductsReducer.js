import { GetAllProductsConstants } from "../constants";

const initialState = {
  data: [],
};

export const GetAllProductsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GetAllProductsConstants.GET_ALL_PRODUCTS_LOADING:
      return { ...state, type: "loading" };
    case GetAllProductsConstants.GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, type: "success", res: payload };
    case GetAllProductsConstants.GET_ALL_PRODUCTS_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
