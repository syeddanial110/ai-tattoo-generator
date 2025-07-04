import { apiGet } from "@/apis/ApiRequest";
import {
  GetAllChildrenConstants,
  GetAllProductsConstants,
} from "@/store/constants";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";

export const getAllChildren = () => (dispatch) => {
  dispatch({ type: GetAllChildrenConstants.GET_ALL_CHILDREN_LOADING });
  apiGet(
    `${ApiEndpoints.children.base}${ApiEndpoints.children.getAll}`,
    (res) => {
      dispatch({
        type: GetAllChildrenConstants.GET_ALL_CHILDREN_SUCCESS,
        payload: res,
      });
    },
    (err) => {
      dispatch({
        type: GetAllChildrenConstants.GET_ALL_CHILDREN_ERROR,
      });
      toast.error(err?.message);
    }
  );
};
