import { GetAllChildrenConstants, GetAllProductsConstants } from "../constants";

const initialState = {};

export const GetAllChildrenReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GetAllChildrenConstants.GET_ALL_CHILDREN_LOADING:
      return { ...state, type: "loading" };
    case GetAllChildrenConstants.GET_ALL_CHILDREN_SUCCESS:
      return { ...state, type: "success", res: payload };
    case GetAllChildrenConstants.GET_ALL_CHILDREN_ERROR:
      return { ...state, type: "error", res: payload };
    default:
      return state;
  }
};
