import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers';

import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';


const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
|| compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  );
  
const store = createStore(tasks, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
