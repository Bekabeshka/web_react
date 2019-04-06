import React, { Component } from 'react';
import './LoginForm.css'

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form col-md-5 col-11">
        
        <div className="login-form-header mb-4">
          <p className="text-center">WELCOME TO</p>
          <h2 className="text-center">KBTU</h2>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Email</span>
          </div>
          <input type="email" className="form-control"></input>
        </div>
            
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Password</span>
          </div>
          <input type="password" className="form-control"></input>
        </div>

        <div className="input-form-bottom">
          <div className="d-flex justify-content-between align-items-center">
            
            <div className="checkbox-form">
              <input type="checkbox" ></input>
              <label className="form-check-label">Remember me </label>
            </div>

            <button className="btn btn-secondary">Sign In</button>

          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;