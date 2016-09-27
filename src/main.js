"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Router, IndexRoute, Route, hashHistory} from "react-router";
import {Provider} from "react-redux";

import App from "./components/app";
import store from "./store/store";
import Error from "./content/error";
import Startpage from "./content/startpage";
import AboutMe from "./content/about_me";
import Contact from "./content/contact";
import Stories from "./content/stories";

if(document.getElementById("main")) {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Startpage}/>
                    <Route path="/about_me" component={AboutMe}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/stories" component={Stories}/>
                    <Route path="*" component={Error}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById("main")
    );
}