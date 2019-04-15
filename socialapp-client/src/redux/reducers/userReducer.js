import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTEHNTICATED,
  LOADING_USER
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTEHNTICATED:
      return initialState;
    case SET_USER:
      console.log(action.payload.userData);
      return {
        ...action.payload.userData,
        authenticated: true,
        loading: false
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
