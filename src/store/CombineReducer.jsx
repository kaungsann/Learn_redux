import { combineReducers } from "redux";
import accountReducer from "./Reducers /accountReducers";
import userReducer from "./Reducers /userReducer";

const reducers = combineReducers({
  account: accountReducer,
  user: userReducer,
});

export default reducers;
