import React, { Component } from 'react';

import './App.css';

import LoginPage from './components/login-page/LoginPage';
import AppComponent from './AppComponent';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogged: true
    }
  }

  render() {
    if (this.state.isLogged) {
      return <AppComponent></AppComponent>;
    } else {
      return <LoginPage></LoginPage>;
    }
  }
}

export default App;
