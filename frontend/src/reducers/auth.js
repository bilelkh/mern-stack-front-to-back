import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../actions/types";

const intialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: true,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
  // case REGISTER_SUCCESS : localStorage.setItem('token')
};
