import { combineReducers } from "redux";
import addTodoReducer from "./app";

const rootReducer = combineReducers({
  todoState: addTodoReducer
});

export default rootReducer;
