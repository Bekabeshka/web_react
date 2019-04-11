import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Breadcrumb.css'

class Breadcrumb extends Component {
  render() {
    return (
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><NavLink to='/logged/news'>Main</NavLink></li>
          <li className="breadcrumb-item active">{this.props.teacher}</li>
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;