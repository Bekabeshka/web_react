import React, { Component } from 'react';
import TeacehrsForm from './teachers-form/TeachersForm';
import Breadcrumb from './breadcrumb/Breadcrumb';

class TeachersPage extends Component {
  render() {
    return (
      <div class="container content">
        <Breadcrumb teachersData={teachersData}></Breadcrumb>
        <TeacehrsForm teachersData={teachersData}></TeacehrsForm>
      </div>
    );
  }
}

let teachersData = [
  {
    name: 'Pakita',
    files: [
      {
        name: 'File 1',
      },
      {
        name: 'File 2',
      },
      {
        name: 'File 3',
      }
    ]
  },
  {
    name: 'Mels',
    files: [
      {
        name: 'File 1',
      },
      {
        name: 'File 2',
      },
      {
        name: 'File 3',
      }
    ]
  }
]

export default TeachersPage;