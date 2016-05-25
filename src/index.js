import React from 'react';
import ReactDOM from 'react-dom';
import Reactuikit from 'reactuikit';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, hashHistory, Link } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import  Main  from './containers/indexContainer';
import reducers from './reducers/indexReducers';

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
  React.createElement(Provider,{store: store},
    React.createElement(Router,{history: history},
      React.createElement(Route, {path: '/', component: Main},
        //react.createElement(Route, {path: 'prueba', component: pruebaContainer}),
        //react.createElement(Route, {path: 'prueba2', component: pruebaContainer2})
      )
    )
  )
),document.getElementById('main'));
