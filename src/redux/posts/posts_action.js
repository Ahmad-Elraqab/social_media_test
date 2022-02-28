import * as api from "./posts";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    let data = await api.fetchPosts();

    dispatch(setPosts(data));

    dispatch(setLoading(false));

  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (value) => async (dispatch) => {
  try {

    dispatch(deletePost_(value));

  } catch (error) {
    console.log(error);
  }
};

export const setPosts = (value) => ({
  type: "FETCH_ALL_POSTS",
  value,
});

export const deletePost_ = (value) => ({
  type: "DELETE_POST",
  value,
});

export const setLoading = (value) => (dispatch) => {
  try {

    dispatch({ type: "SET_LOADING", payload: value });
  } catch (error) { }
};


