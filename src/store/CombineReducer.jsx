import { combineReducers } from "redux";
import accountReducer from "./Reducers /accountReducers";
import userReducer from "./Reducers /userReducer";
import loginReducers from "./Reducers /loginReducers";

const reducers = combineReducers({
  account: accountReducer,
  user: userReducer,
  loggedin: loginReducers,
});

export default reducers;
