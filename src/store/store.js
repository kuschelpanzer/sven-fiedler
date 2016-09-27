"use strict";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";

import {language} from "./reducers/languageReducer";

let reducer = combineReducers({
    language : language,
});

export default createStore(
    reducer,
    compose(
        applyMiddleware(thunk), // redux-thunk für asynchrone actions
        window.devToolsExtension ? window.devToolsExtension() : f => f //Tolle Redux-Dev-Tools
    )
);