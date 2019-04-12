import React, { Component } from 'react';
import './NewsCard.css';

class NewsCard extends Component {
  
  render() {
    return (
      <div className="card news-card">
        <div className="card-header">
          {this.props.data.title}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{this.props.data.text}</p>
            <footer className="blockquote-footer">
              Posted by 
              <cite> {this.props.data.author} </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default NewsCard;