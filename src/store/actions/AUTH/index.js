import { apiPost } from "@/apis/ApiRequest";
import {
  EmailVerifyConstants,
  SignInConstants,
  SignupConstants,
} from "@/store/constants";

import { ApiEndpoints } from "@/utils/ApiEndpoints";

export const signup = (data) => (dispatch) => {
  dispatch({ type: SignupConstants.SIGN_UP_LOADING });
  apiPost(
    `${ApiEndpoints.auth.base}${ApiEndpoints.auth.login}`,
    data,
    (res) => {
      dispatch({
        type: SignupConstants.SIGN_UP_SUCCESS,
        payload: { res, data },
      });
    },
    (err) => {
      dispatch({ type: SignupConstants.SIGN_UP_ERROR, payload: err });
      toast.error(err.response.data.message);
    }
  );
};

export const emailVerification = (data) => (dispatch) => {
  dispatch({ type: EmailVerifyConstants.EMAIL_VERIFY_LOADING });
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.verify}`,
    data,
    (res) => {
      dispatch({
        type: EmailVerifyConstants.EMAIL_VERIFY_SUCCESS,
        payload: { res, data },
      });
    },
    (err) => {
      dispatch({ type: EmailVerifyConstants.EMAIL_VERIFY_ERROR, payload: err });
    }
  );
};

export const signin = (data) => (dispatch) => {
  dispatch({ type: SignInConstants.SIGN_IN_LOADING });
  // apiPost(
  //   `${ApiEndpoints.root}${ApiEndpoints.login}`,
  //   data,
  //   (res) => {
  //     setToken(res.data.token)
  //     setLocalStorage("adminId", res.data._id)
  dispatch({
    type: SignInConstants.SIGN_IN_SUCCESS,
    payload: { data },
  });
  // },
  // (err) => {
  //   toast.error(err.response.data.message)
  //   dispatch({ type: SignInConstants.SIGN_IN_ERROR, payload: err })
  // },
  // )
};
