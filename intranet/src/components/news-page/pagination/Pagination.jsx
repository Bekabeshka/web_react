import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.css';

class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      range: parseInt(Math.ceil(this.props.amount / 5), 10),
      current: 1
    }
  }
    
  render() {
    return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <NavLink to="/logged" activeClassName="active" className="page-link">
            <span>&laquo;</span>
          </NavLink>
        </li>
        {
          [...Array(this.state.range).keys()].map((number) => 
            <li className="page-item"><NavLink to="/logged" activeClassName="active" className="page-link">{number}</NavLink></li>
          )
        }
        <li className="page-item">
          <NavLink to="/logged" activeClassName="active" className="page-link">
            <span>&raquo;</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default Pagination;