import './styles/app.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'react-hot-loader/patch';
import 'grommet/scss/vanilla/index.scss';
import '@blueprintjs/core/dist/blueprint.css';
import 'typeface-roboto'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from './Config';

firebase.initializeApp(firebaseConfig);

import App from './App';

import Auth from './Services/Auth'

import stores from './stores';

function renderApp() {
    Auth.init().then(() => {
        ReactDOM.render(
            <AppContainer>
                <Provider {...stores()}>
                    <App />
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