import './styles/app.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'react-hot-loader/patch';


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { initFirestorter } from 'firestorter';

import App from './app';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
initFirestorter({firebase: firebase})

import stores from './stores';

function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <Provider {...stores()}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp();

if (module.hot) {
    module.hot.accept(() => {
        renderApp();
    });
}