import { SignInConstants } from '../constants'

const initialState = {
  signin: [],
}

export const SignInReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SignInConstants.SIGN_IN_LOADING:
      return { ...state, type: 'loading' }
    case SignInConstants.SIGN_IN_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case SignInConstants.SIGN_IN_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
