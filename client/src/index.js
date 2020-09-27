import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navBar';
import Products from './components/products';
import Cart from './components/cart';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';


const STORE = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={STORE}>
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" component={Products} exact/>
      <Route path="/cart" component={Cart} exact/>
    </Switch>
    </Router>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
