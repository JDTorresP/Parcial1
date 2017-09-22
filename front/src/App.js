import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import FollowerList from './FollowerList';
import SearchBar from 'material-ui-search-bar'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500
  },
  appBar: {
    height: 50
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "john-guerra",
      followers: [{}],
      busqueda:""
    };
  }

  handleName(texto){
    console.log(texto);
    this.setState({
      username:texto
    });
  }
  componentDidMount () {
      var url ="/getFollowers/"+this.state.username;
    fetch(url).then((res) => res.json()).then((folls) => {
      console.log(folls)
      this.setState({followers: folls.data});
      console.log(this.state.followers)
    });
  }
  
  
  filter(){
      var url ="/getFollowers/"+this.state.username;
    fetch(url).then((res) => res.json()).then((folls) => {
      console.log(folls)
      this.setState({followers: folls.data});
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar title="Github Followers"/>
        </MuiThemeProvider>
        <div>
           <MuiThemeProvider muiTheme={muiTheme}>          
          <SearchBar
      onChange={(e) => {this.handleName(e)}}
      onRequestSearch={() => {this.filter();}}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    /></MuiThemeProvider>
          <h1 className="title">Active Followers for {this.state.username}</h1>
          <MuiThemeProvider muiTheme={muiTheme}>
            <FollowerList followers={this.state.followers}/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
