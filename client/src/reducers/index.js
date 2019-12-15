import { combineReducers } from "redux";
import alert from "./alert";
import auth from './auth';
import rank from './rank';
import search from "./search";


const rootReducer = combineReducers({
  alert,
  auth,
  rank,
  search
});

export default rootReducer;
