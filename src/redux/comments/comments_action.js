import * as api from "./comments";

export const getComments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))

    let data = await api.fetchComments();

    dispatch(setLoading(false))

    dispatch({ type: "FETCH_ALL_COMMENTS", payload: data });
  } catch (error) { }
};

export const setLoading = (value) => (dispatch) => {
  try {

    dispatch({ type: "SET_LOADING", payload: value });
  } catch (error) { }
};


export const deleteComment = (value) => (dispatch) => {
  try {

    dispatch({ type: "DELETE_COMMENT", value });
  } catch (error) { }
};


