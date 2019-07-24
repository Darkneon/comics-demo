import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reducerComics} from './comics/reducers';
import {reducerFavorites} from './favorites/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import App from './App';

const middleware = [thunk];
const rootReducer = combineReducers({reducerComics, reducerFavorites});
const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
