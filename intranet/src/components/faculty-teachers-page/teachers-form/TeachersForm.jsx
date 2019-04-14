import React, { Component } from 'react';

import Breadcrumb from './../breadcrumb/Breadcrumb'

class TeachersForm extends Component {
  render() {
    return (
      <div>
        <Breadcrumb data={facultyTeachersFiles.find(x => x.name === 'FIT')}></Breadcrumb>
        <div className="accordion" id="accordionExample">

          {
            facultyTeachersFiles.find(x => x.name === 'FIT').teachers.map((teacher) => 
              <div key={teacher.id} className="card">
                <div className="card-header">
                  <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" 
                    data-target={'#teacher' + teacher.id }>
                      { teacher.name }
                    </button>
                  </h2>
                </div>
            
                <div id={'teacher' + teacher.id} className="collapse">
                  <div className="card-body">
                    <div className="list-group">
                      {
                        teacher.files.map((file) => 
                          <div key={file.id} className="list-group-item">
                            <label className="mt-1"> {file.name} </label>
                            <button className="btn btn-secondary btn-sm float-right">Download</button>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
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

export default TeachersForm;