import React, { Component } from 'react';
import './MessageCard.css';

class MessageCard extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="d-flex justify-content-between card-header">
          <label className="mt-2">Head</label> 
          <button className="btn btn-danger btn-sm">
            delete
          </button>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde voluptate quo fuga consequatur delectus accusamus impedit adipisci recusandae officia repellat iusto commodi incidunt laudantium nihil, tempore rerum esse! Sed!</p>
            <footer className="blockquote-footer">Send by <cite>Somebody</cite></footer>
          </blockquote>
        </div>
      </div>    
    );
  }
}

export default MessageCard;