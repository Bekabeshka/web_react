import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    
  render() {
    return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
        <li className="page-item"><a className="page-link" href="#">6</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    )
  }
}

export default Pagination;