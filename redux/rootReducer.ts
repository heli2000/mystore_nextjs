import { combineReducers } from "redux";
import cartCounter from "./cartCounter/reducer";

export default combineReducers({
  cartCounter: cartCounter,
});
