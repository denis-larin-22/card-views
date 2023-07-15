import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import persistState from 'redux-localstorage'

const enhancer = compose(applyMiddleware(logger), persistState());

export const store = createStore(rootReducer, enhancer);