import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import contents from "./modules/contents";


const middlewares = [thunk];
const rootReducer = combineReducers({contents});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;