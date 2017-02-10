import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route.jsx'
import {Router,browserHistory} from 'react-router'
import {Provider} from  'react-redux'
import store from './Store'


import './index.css';

let root = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
    <Router history={browserHistory} routes={Route}/>
  </Provider>
  ,root)
