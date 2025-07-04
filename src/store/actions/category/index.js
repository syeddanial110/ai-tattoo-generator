import { apiGet } from "@/apis/ApiRequest";
import {
  EditCategoryDataConstants,
  GetAllCategoriesConstants,
} from "@/store/constants";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

export const editCategoryData = (data) => (dispatch) => {
  dispatch({
    type: EditCategoryDataConstants.EDIT_CATEGORY_DATA_SUCCESS,
    payload: { data },
  });
};

export const getAllCategories = () => (dispatch) => {
  dispatch({ type: GetAllCategoriesConstants.GET_ALL_CATEGORIES_LOADING });
  apiGet(
    `${ApiEndpoints.categories.base}${ApiEndpoints.categories.getAll}`,
    (res) => {
      dispatch({
        type: GetAllCategoriesConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { res },
      });
    },
    (err) => {
      dispatch({
        type: GetAllCategoriesConstants.GET_ALL_CATEGORIES_ERROR,
      });
    }
  );
};
