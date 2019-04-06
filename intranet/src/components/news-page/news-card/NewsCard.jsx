import React, { Component } from 'react';
import './NewsCard.css';

class NewsCard extends Component {
  
  render() {
    return (
      <div className="card news-card">
        <div className="card-header">
            Title
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde voluptate quo fuga consequatur delectus accusamus impedit adipisci recusandae officia repellat iusto commodi incidunt laudantium nihil, tempore rerum esse! Sed!</p>
            <footer className="blockquote-footer">Posted by <cite>Somebody</cite></footer>
            </blockquote>
        </div>
        </div>
    )
  }
}

export default NewsCard;