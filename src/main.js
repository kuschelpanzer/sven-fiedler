"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Router, IndexRoute, Route, hashHistory} from "react-router";
import {Provider} from "react-redux";

import App from "./components/app";
import store from "./store/store";
import Error from "./content/error";
import Content from "./content/content";

if(document.getElementById("main")) {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Content}/>
                    <Route path="/" component={Content}/>
                    <Route path="*" component={Error}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById("main")
    );
}