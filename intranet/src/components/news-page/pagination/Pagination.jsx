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

    this.listForward = this.listForward.bind(this);
    this.listBackward = this.listBackward.bind(this);
  }
    
  listForward() {
    if (this.state.current < this.state.range) {
      this.setState((state) => ({
        current: state.current + 1
      }));
    }
  }

  listBackward() {
    if (this.state.current > 1) {
      this.setState((state) => ({
        current: state.current - 1
      }));
    }
  }

  render() {
    return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <NavLink onClick={this.listBackward} to="/logged/news" activeClassName="active" className="page-link">
            <span>&laquo;</span>
          </NavLink>
        </li>
        {
          getArray(this.state.range).map((number, index) => 
            <li key={index + 1} className="page-item">
              <NavLink to="/logged/news" activeClassName="active" className="page-link">
                {number}
              </NavLink>
            </li>
          )
        }
        <li className="page-item">
          <NavLink onClick={this.listForward} to="/logged/news" activeClassName="active" className="page-link">
            <span>&raquo;</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}

function getArray(size) {
  return Array.from({length: size}, (v, k) => k + 1);
}

export default Pagination;