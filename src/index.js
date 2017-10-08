import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import listReducer from './reducers/listReducer';
import registerServiceWorker from './registerServiceWorker';

  const reducers = combineReducers({
    listReducer,
  });

  const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

  ReactDOM.render(React.createElement(
    HashRouter,
    null,
    React.createElement(
      Provider,
      { store },
      React.createElement(App, null),
    ),
  ), document.getElementById('root'));

registerServiceWorker();
