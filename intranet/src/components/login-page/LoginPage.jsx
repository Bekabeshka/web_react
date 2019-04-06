import React, { Component } from 'react';
import LoginForm from './login-form/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div class="d-flex w-100 justify-content-center align-items-center h-100vh">
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default LoginPage;