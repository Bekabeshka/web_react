import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
  
  
  render() {
    return (
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">KBTU</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teachers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Registrator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Schedule</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                B.Kassymov
                </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">
                    Messages 
                    <span className="badge badge-primary badge-pill">3</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Settings</a>
                </div>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" ></input>
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    );
  }
}