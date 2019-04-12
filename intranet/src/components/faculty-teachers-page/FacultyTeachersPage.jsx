import React, { Component } from 'react';
import TeacehrsForm from './teachers-form/TeachersForm';
import Breadcrumb from './breadcrumb/Breadcrumb';
import FacultyForm from './faculty-from/FacultyForm'

class FacultyTeachersPage extends Component {
  render() {
    return (
      <div className="container content">
        <Breadcrumb data={facultyTeachersFiles}></Breadcrumb>
        { 
        //  <FacultyForm data={facultyTeachersFiles}></FacultyForm> 
        }
        <TeacehrsForm data={facultyTeachersFiles}></TeacehrsForm>
      </div>
    );
  }
}

let facultyTeachersFiles = [
  {
    id: 1,
    name: 'FIT',
    teachers: [
      {
        id: 1,
        name: 'Pakita',
        files: [
          {
            id: 1,
            name: 'File 1'
          },
          {
            id: 2,
            name: 'File 2'
          },
          {
            id: 3,
            name: 'File 3'
          },
        ]
      },
      {
        id: 2,
        name: 'Mels',
        filse: [
          {
            id: 4,
            name: 'File 4'
          },
          {
            id: 5,
            name: 'File 5'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'BS',
    teachers: [
      {
        id: 3,
        name: 'Simon',
        files: [
          {
            id: 6,
            name: 'File 6'
          },
          {
            id: 7,
            name: 'File 7'
          },
          {
            id: 8,
            name: 'File 8'
          },
        ]
      },
      {
        id: 4,
        name: 'Peter',
        filse: [
          {
            id: 9,
            name: 'File 9'
          },
          {
            id: 10,
            name: 'File 10'
          }
        ]
      }
    ]
  }
]

export default FacultyTeachersPage;