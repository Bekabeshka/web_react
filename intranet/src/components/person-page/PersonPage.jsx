import React, { Component } from 'react';
import PersonCard from './person-card/PersonCard';
import StudentInfo from './student-info/StudentInfo';

class PersonPage extends Component {
  render() {
    return (
      <div className="container content">
        <PersonCard></PersonCard>
        <StudentInfo></StudentInfo>
      </div>
    );
  }
}

export default PersonPage;