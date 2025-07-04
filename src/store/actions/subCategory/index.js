import { apiGet } from "@/apis/ApiRequest";
import {
  EditCategoryDataConstants,
  EditSubCategoryDataConstants,
  GetAllCategoriesConstants,
  GetAllSubCategoriesConstants,
} from "@/store/constants";
import { ApiEndpoints } from "@/utils/ApiEndpoints";

export const editSubCategoryData = (data) => (dispatch) => {
  dispatch({
    type: EditSubCategoryDataConstants.EDIT_SUB_CATEGORY_DATA_SUCCESS,
    payload: { data },
  });
};

export const getAllSubCategories = () => (dispatch) => {
  dispatch({
    type: GetAllSubCategoriesConstants.GET_ALL_SUB_CATEGORIES_LOADING,
  });
  apiGet(
    `${ApiEndpoints.subCategory.base}${ApiEndpoints.subCategory.getAll}`,
    (res) => {
      dispatch({
        type: GetAllSubCategoriesConstants.GET_ALL_SUB_CATEGORIES_SUCCESS,
        payload: { res },
      });
    },
    (err) => {
      dispatch({
        type: GetAllSubCategoriesConstants.GET_ALL_SUB_CATEGORIES_ERROR,
      });
    }
  );
};
