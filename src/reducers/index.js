import { combineReducers } from "redux";
import Select from "./Select";
import FoodList from "./FoodList";
import Dish from "./Menu.js";
const rootReducer = combineReducers({
  cart: Select,
  FoodList,
  dish: Dish
});
export default rootReducer;
