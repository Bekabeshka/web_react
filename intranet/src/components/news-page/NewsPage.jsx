import React, { Component } from 'react';
import NewsCard from './news-card/NewsCard';
import Pagination from './pagination/Pagination';

class NewsPage extends Component {
  render() {
    return (
      <div className="container content">
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        {/* map!! */}
        
        <Pagination></Pagination>
      </div>
    );
  }
}

export default NewsPage;