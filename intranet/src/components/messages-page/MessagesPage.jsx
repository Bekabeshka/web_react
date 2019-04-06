import React, { Component } from 'react';
import MessageCard from './message-card/MessageCard';

class MessagesPage extends Component {
  render() {
    return (
      <div class="container content">
        <MessageCard></MessageCard>
      </div>
    );
  }
}

export default MessagesPage;