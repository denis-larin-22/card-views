import { combineReducers } from "redux";
import { bcgReducer } from "./bcgReducer/bcgReducer";

export const rootReducer = combineReducers({
    background: bcgReducer 
})