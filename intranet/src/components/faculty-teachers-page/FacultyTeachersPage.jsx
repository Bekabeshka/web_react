import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import TeacehrsForm from './teachers-form/TeachersForm';
import FacultyForm from './faculty-from/FacultyForm'

class FacultyTeachersPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      teacherName: ''
    }
  }
  
  render() {
    if (this.state.teacherName.length == 0) {
      return (
        <div className="container content">
          <FacultyForm data={facultyTeachersFiles}></FacultyForm> 
        </div>
      );
    } else {
      return (
        <div className="container content">
          
          <TeacehrsForm data={facultyTeachersFiles}></TeacehrsForm>
        </div>
      );
    }

    return (
      <Switch>
        <div className="container content">
          <Route to='/faculties' component={FacultyForm} exact={true}/>
          <Route to='/faculties/:name' component={TeacehrsForm}/>
        </div>
      </Switch>
    )
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
        files: [
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
        files: [
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