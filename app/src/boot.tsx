import './styles/app.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'react-hot-loader/patch';
import 'grommet/scss/vanilla/index.scss';


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { initFirestorter } from 'firestorter';

import App from './App';
import { firebaseConfig } from './Config';

firebase.initializeApp(firebaseConfig);

import Auth from './Services/Auth'

import stores from './stores';

function renderApp() {
    Auth.init().then(() => {
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
    });
    
}

renderApp();

if (module.hot) {
    module.hot.accept(() => {
        renderApp();
    });
}