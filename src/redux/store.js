import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {loginReducer, catalogReducer, orderReducer} from "./reducers";

const rootReducer = combineReducers({
    login: loginReducer,
    catalog: catalogReducer,
    order: orderReducer,
    // loginReducer,
    // catalogReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))