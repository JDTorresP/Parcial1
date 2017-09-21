import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {

  componentDidMount() {
    fetch("/getFollowers/john-guerra").then((res) => res.json()).then((followers) => {
      console.log(followers)
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider  muiTheme={muiTheme}>
          <AppBar title="Github Followers" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
