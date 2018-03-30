import './styles/app.css';
//import 'font-awesome/css/font-awesome.css';
import 'react-hot-loader/patch';
import 'typeface-roboto';


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader';

import { JSONFile } from 'InfiniKit/Libraries/JSON';

import App from './App';
import stores from './stores';
import * as Config from './Config';


function renderApp() {
    JSONFile.getData(Config.dataFile).then((data) => {
        ReactDOM.render(
            <AppContainer>
                <Provider {...stores()}>
                    <App data={data} />
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
