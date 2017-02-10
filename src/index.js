import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route.jsx'
import {Router,browserHistory} from 'react-router'
import {Provider} from  'react-redux'
import store from './Store'
let root = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
    <Router history={browserHistory} routes={Route}/>
  </Provider>
  ,root)

//In order to incorporate Redux, Provider was used to create a 'global' store
//Although other pages were not used, I used React-router, so that this project 
//can add components onto new pages (i.e. Login Page, Register Page)
