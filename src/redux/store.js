import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const MIDDLEWARES = [logger];

const STORE = createStore(rootReducer, applyMiddleware(...MIDDLEWARES));

export default STORE;
