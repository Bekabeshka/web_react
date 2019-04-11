import React, { Component } from 'react';

class StudentInfo extends Component {
  render() {
    return (
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                View Currnet Attestation
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" className="collapse show">
            <div className="card-body">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">First Attestation</th>
                    <th scope="col">Second Attestation</th>
                    <th scope="col">Final</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.attestationsData.map((item) => 
                      <tr key={item.id}>
                        <th>{item.name}</th>
                        <td>{item.attestation1}</td>
                        <td>{item.attestation2}</td>
                        <td>{item.final}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
                View Transcript
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse">
            <div className="card-body">
              {
                this.props.semestersData.map((item) => 
                <div key={item.id}>
                  <h5>{item.name}</h5>

                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Subject</th>
                          <th scope="col">First Attestation</th>
                          <th scope="col">Second Attestation</th>
                          <th scope="col">Final</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          item.attestationsData.map((data) => 
                            <tr>
                              <th>{data.name}</th>
                              <td>{data.attestation1}</td>
                              <td>{data.attestation2}</td>
                              <td>{data.final}</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                )
              }
            
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">First Attestation</th>
                    <th scope="col">Second Attestation</th>
                    <th scope="col">Final</th>
                  </tr>
                </thead>
                <tbody>

                  
                  <tr>
                    <th scope="row">Subject 1</th>
                    <td>30</td>
                    <td>30</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <th scope="row">Subject 2</th>
                    <td>30</td>
                    <td>25</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <th scope="row">Subject 3</th>
                    <td>15</td>
                    <td>15</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>    
    );
  }
}

export default StudentInfo;