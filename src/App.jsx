import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SideBar from './Components/SideBar/SideBar'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



import './App.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SideBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

