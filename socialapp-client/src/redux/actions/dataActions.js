import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  LOADING_UI,
  POST_SCREAM,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_SCREAM,
  STOP_LOADING_UI
} from "../types";
import axios from "axios";

//get all screams
export const getScreams = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/screams")
    .then(res => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SCREAMS,
        payload: []
      });
    });
};

export const getScream = screamId => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/scream/${screamId}`)
    .then(res => {
      dispatch({
        type: SET_SCREAM,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(err => console.log(err));
};

//like scream
export const likeScream = screamId => dispatch => {
  axios
    .get(`/scream/${screamId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_SCREAM,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//unlike scream
export const unLikeScream = screamId => dispatch => {
  axios
    .get(`/scream/${screamId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_SCREAM,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//post scream
export const postScream = scream => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/scream", scream)
    .then(res => {
      dispatch({
        type: POST_SCREAM,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

//delete scream
export const deleteScream = screamdId => dispatch => {
  axios
    .delete(`/scream/${screamdId}`)
    .then(() => {
      dispatch({ type: DELETE_SCREAM, payload: screamdId });
    })
    .catch(err => console.log(err));
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
