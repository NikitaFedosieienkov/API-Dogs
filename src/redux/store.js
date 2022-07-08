// import { combineReducers, createStore } from "redux";
import dogsReducer from "./dogs/reducer";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { localStorageHelper } from "../helpers/localStorageHelper";

const rootReducer = combineReducers({
    dogs: dogsReducer
});

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);
const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));
store.subscribe(() => localStorageHelper.setItem("dogs", store.getState().dogs.dogs.items));

export default store;