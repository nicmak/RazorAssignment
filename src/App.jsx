import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SideBar from './Components/SideBar/SideBar'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
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

//MuiThemeProvider is used as a theme template for Material-UI