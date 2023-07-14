import { combineReducers } from "redux";
import { cardSetReducer } from "./cardSetReduser";

export const rootReducer = combineReducers({
    cardSetReducer: cardSetReducer,
})