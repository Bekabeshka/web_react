import React, { Component } from 'react';
import './Breadcrumb.css'

class Breadcrumb extends Component {
  render() {
    return (
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Main</a></li>
          <li className="breadcrumb-item active">Faculty</li>
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;