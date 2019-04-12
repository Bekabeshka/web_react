import React, { Component } from 'react';
import MessageCard from './message-card/MessageCard';

class MessagesPage extends Component {
  render() {
    let messagesList = messages.map((message) => 
      <MessageCard key={message.id} messageData={message}></MessageCard>
    )
  
    return (
      <div className="container content">
        { messagesList }

      </div>
    );
  }
}

let messages = [
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

export default MessagesPage;