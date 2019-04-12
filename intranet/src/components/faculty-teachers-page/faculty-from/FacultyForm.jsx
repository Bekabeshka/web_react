import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FacultyForm extends Component {
  render() {
    return (
      <div className="accordion" id="accordionExample">
        {
          this.props.data.map((faculty) => 
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
                        <Link to='/logged/teachers' key={teacher.id} className="list-group-item list-group-item-action">
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

export default FacultyForm;