"use strict";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";

import {language, content} from "./reducers/languageReducer";

let reducer = combineReducers({
    language : language,
    content : content
});

export default createStore(
    reducer,
    compose(
        applyMiddleware(thunk), // redux-thunk für asynchrone actions
        window.devToolsExtension ? window.devToolsExtension() : f => f //Tolle Redux-Dev-Tools
    )
);