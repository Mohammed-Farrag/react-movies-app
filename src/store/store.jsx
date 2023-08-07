import { applyMiddleware, legacy_createStore  as createStore} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import combineReducers from './reducers/combine.js'
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./Slices/loaderSlice.js";
import thunk from "redux-thunk";


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));


export default store;
