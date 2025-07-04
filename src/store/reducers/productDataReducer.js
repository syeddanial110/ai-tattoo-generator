import { ProductDataConstants } from "../constants";

const initialState = {
  res: {}, // Use an object to store product data
};

export const ProductDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductDataConstants.PRODUCT_DATA_LOADING:
      return { ...state, type: "loading" };
    case ProductDataConstants.PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        type: "success",
        res: {
          ...state.res,      // keep previous fields
          ...payload.data,   // add/update new fields
        },
      };
    case ProductDataConstants.PRODUCT_DATA_ERROR:
      return { ...state, type: "error" };
    default:
      return state;
  }
};