import { combineReducers } from "redux";
import Select from "./Select";
import FoodList from "./FoodList";
const rootReducer = combineReducers({
  cart: Select,
  FoodList
});
export default rootReducer;
