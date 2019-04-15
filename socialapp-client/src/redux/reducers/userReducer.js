import { SET_USER, SET_AUTHENTICATED, SET_UNAUTEHNTICATED } from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: []
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
      return {
        ...action.payload,
        authenticated: true
      };
    default:
      return state;
  }
}
