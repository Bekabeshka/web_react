import React, { Component } from 'react';
import RegistratorForm from './registrator-form/RegistratorForm';


class RegistratorPage extends Component {
  render() {
    return (
      <div class="container content">
        <RegistratorForm data={data}></RegistratorForm>
      </div>
    );
  }
}

let data = [
  {
    id: 1,
    name: 'OOP',
    credits: 3,
    examDate: {
      date: '13.02.19',
      time: '14:00'
    }
  },
  {
    id: 2,
    name: 'Algorithms',
    credits: 4,
    examDate: {
      date: '15.03.19',
      time: '12:00'
    }
  },
  {
    id: 3,
    name: 'Economics',
    credits: 2,
    examDate: {
      date: '21.02.19',
      time: '17:00'
    }
  }
]

export default RegistratorPage;