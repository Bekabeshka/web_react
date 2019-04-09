import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

// this.props.messagesAmount

export default class Navbar extends Component {
  render() {
    return (
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <span className="navbar-brand">KBTU</span>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/logged/news" activeClassName="active" className="nav-link">News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logged/faculty/teachers" activeClassName="active" className="nav-link">Teachers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logged/registrator" activeClassName="active" className="nav-link">Registrator</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logged/schedule" activeClassName="active" className="nav-link">Schedule</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/logged/person" activeClassName="active" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
                B.Kassymov
                </NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to="/logged/person-card" activeClassName="active" className="dropdown-item">Profile</NavLink>
                  <NavLink to="/logged/person-messages" activeClassName="active" className="dropdown-item">
                    Messages 
                    <span className="badge badge-primary badge-pill">{this.props.messagesAmount}</span>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink to="/logged/person-settings" activeClassName="active" className="dropdown-item">Settings</NavLink>
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