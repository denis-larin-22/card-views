import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";

const enhancer = compose(applyMiddleware(logger));

export const store = createStore(rootReducer, enhancer);