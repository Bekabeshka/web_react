import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FacultyForm extends Component {
  render() {
    return (
      <div className="accordion" id="accordionExample">
        {
          facultyTeachersFiles.map((faculty) => 
            <div key={faculty.id} className="card">
              <div className="card-header">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" 
                  data-target={'#faculty' +  faculty.id}>
                    { faculty.name }
                  </button>
                </h2>
              </div>
          
              <div id={'faculty' + faculty.id} className="collapse">
                <div className="card-body">
                  <div className="list-group">

                    {
                      faculty.teachers.map((teacher) => 
                        <Link to={'/faculties/:' + teacher.name.toLocaleLowerCase()} key={teacher.id} className="list-group-item list-group-item-action">
                          <div>
                            <label className="mt-1"> { teacher.name } </label>
                          </div>
                        </Link>
                      ) 
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
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

export default FacultyForm;