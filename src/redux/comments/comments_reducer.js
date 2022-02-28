
const initState = {
  loading: false,
  comments: [],
};

const commentsReducer = (state = initState, action) => {
  switch (action.type) {

    case "DELETE_COMMENT":
      var array = [...state.comments];

      var index = array.indexOf(action.value)

      if (index !== -1) {
        array.splice(index, 1);
      }

      return { ...state, comments: array };

    case "FETCH_ALL_COMMENTS":
      return { ...state, comments: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
export default commentsReducer;
