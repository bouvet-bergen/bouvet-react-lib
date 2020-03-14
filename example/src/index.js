import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';

// import { WebClientMiddleware, WebClientError } from 'bouvet-react-lib';
import reducers from './Reducers';
import { sagas } from './Sagas';
import './index.scss';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const resolveRefreshToken = async (client, refreshToken) => {
//     try {
//         client.body = "\"" + refreshToken + "\"";
//         client.method = 'POST';
//         const result = await client.call('auth/token');
//         return { token: result.accessToken, refreshToken: result.refreshToken };
//     } catch (error) {
//         throw new WebClientError(error.statusText, error.status);        
//     }
// }

// Saga
const sagaMiddleware = createSagaMiddleware();

// Store
let store = createStore(
    reducers,
    // compose(applyMiddleware(thunk, WebClientMiddleware(resolveRefreshToken, 'https://localhost:5001/api'), sagaMiddleware), reduxDevTools)
    compose(applyMiddleware(thunk, sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <Router basename={baseUrl}>
            <App />
        </Router>
    </Provider>,
    rootElement
);

serviceWorker.unregister();
