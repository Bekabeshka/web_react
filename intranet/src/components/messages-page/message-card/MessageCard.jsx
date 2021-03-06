import React, { Component } from 'react';
import './MessageCard.css';

class MessageCard extends Component {
  
  render() {
    return (
      <div className="card message-card">
        <div className="d-flex justify-content-between card-header">
          <label className="mt-2">{this.props.messageData.title}</label> 
          <button className="btn btn-danger btn-sm">
            delete
          </button>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              {this.props.messageData.text}
            </p>
            <footer className="blockquote-footer">
              Send by <cite>{this.props.messageData.author}</cite>
            </footer>
          </blockquote>
        </div>
      </div>    
    );
  }
}

export default MessageCard;