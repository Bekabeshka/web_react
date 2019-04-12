import React, { Component } from 'react';

class TeachersForm extends Component {
  render() {
    return (
      <div className="accordion" id="accordionExample">

        {
          this.props.data.find(x => x.name === 'FIT').teachers.map((teacher) => 
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
                      // ??
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
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                Teacher 1
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" className="collapse">
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item">
                  <label className="mt-1"> File 1 </label>
                  <button className="btn btn-secondary btn-sm float-right">Download</button>
                </div>
                <div className="list-group-item">
                  <label className="mt-1"> File 2 </label>
                  <button className="btn btn-secondary btn-sm float-right">Download</button>
                </div>
                <div className="list-group-item">
                  <label className="mt-1"> File 3 </label>
                  <button className="btn btn-secondary btn-sm float-right">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
                Teacher 2
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item">
                  <label className="mt-1"> File 1 </label>
                  <button className="btn btn-secondary btn-sm float-right">Download</button>
                </div>
                <div className="list-group-item">
                  <label className="mt-1"> File 2 </label>
                  <button className="btn btn-secondary btn-sm float-right">Download</button>
                </div>
                <div className="list-group-item">
                  <label className="mt-1"> File 3 </label>
                  <button className="btn btn-secondary btn-sm float-right">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeachersForm;