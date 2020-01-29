import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import axios from "axios";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// CREATE REDUX STORE
const store = createStore(reducer);

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
    request => {
        console.log(request);
        // Edit request config
        return request;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        console.log(response);
        // Edit request config
        return response;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        store={store}
    >
        <App />
    </Auth0Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
