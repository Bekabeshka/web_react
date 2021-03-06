import React, { Component } from 'react';
import NewsCard from './news-card/NewsCard';
import Pagination from './pagination/Pagination';

class NewsPage extends Component {
  render() {
    let newsList = newsData.map((data) => 
      <NewsCard key={data.id} data={data}></NewsCard>
    )

    return (
      <div className="container content">
        { newsList }
        
        <Pagination amount={newsData.length}></Pagination>
      </div>
    );
  }
}

const newsData = [
  {
    id: 1,
    title: "Title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam, quod quidem amet aliquam neque inventore voluptatibus quasi! Ex inventore eveniet, neque numquam eaque dolor esse est consequuntur nulla praesentium?",
    author: "Somebody 1"
  }, 
  {
    id: 2,
    title: "Title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam, quod quidem amet aliquam neque inventore voluptatibus quasi! Ex inventore eveniet, neque numquam eaque dolor esse est consequuntur nulla praesentium?",
    author: "Somebody 2"
  }
];

export default NewsPage;