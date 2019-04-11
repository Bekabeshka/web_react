import React, { Component } from 'react';
import RegistratorForm from './registrator-form/RegistratorForm';


class RegistratorPage extends Component {
  render() {
    return (
      <div class="container content">
        <RegistratorForm examsData={examsData} subjectsData={subjectsData}></RegistratorForm>
      </div>
    );
  }
}

let examsData = [
  {
    id: 1,
    name: 'Subject 1',
    date: '13.02.19',
    time: '14:00'
  },
  {
    id: 2,
    name: 'Subject 2',
    date: '15.03.19',
    time: '12:00'
  },
  {
    id: 3,
    name: 'Subject 3',
    date: '21.02.19',
    time: '17:00'
  }
]

let subjectsData = [
  {
    id: 1,
    name: 'Subject 1',
    credits: 3
  },
  {
    id: 2,
    name: 'Subject 2',
    credits: 4
  },
  {
    id: 3,
    name: 'Subject 3',
    credits: 2
  }
]

export default RegistratorPage;