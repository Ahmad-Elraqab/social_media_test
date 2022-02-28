
const initState = {
  loading: false,
  posts: [],
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {

    case "DELETE_POST":

      var array = [...state.posts];

      var index = array.indexOf(action.value)

      if (index !== -1) {
        array.splice(index, 1);
      }

      return { ...state, posts: array };

    case "FETCH_ALL_POSTS":
      return { ...state, posts: action.value };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
export default postsReducer;
