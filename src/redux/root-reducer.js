import postsReducer from "./posts/posts_reducer";
import commentsReducer from "./comments/comments_reducer";

import { combineReducers } from "redux";

export default combineReducers({
  postsReducer: postsReducer,
  commentsReducer: commentsReducer,
});
