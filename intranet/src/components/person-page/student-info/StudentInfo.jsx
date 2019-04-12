import React, { Component } from 'react';

class StudentInfo extends Component {
  render() {
    let currentAttestation = this.props.data[this.props.data.length - 1].attestationData

    let attestationTable = currentAttestation.map((subject) =>
      <tr key={subject.id}>
        <th>{subject.name}</th>
        <td>{subject.attestation1}</td>
        <td>{subject.attestation2}</td>
        <td>{subject.final}</td>
      </tr>
    )

    let semesterData = this.props.data.map((semester) => 
      <div key={semester.id}>
        <h5>{semester.name}</h5>

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
              semester.attestationData.map((subject) => 
                <tr key={subject.id}>
                  <th>{subject.name}</th>
                  <td>{subject.attestation1}</td>
                  <td>{subject.attestation2}</td>
                  <td>{subject.final}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )

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
      
          <div id="collapseOne" className="collapse show text-center">
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
                  { attestationTable }
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
          <div id="collapseTwo" className="collapse text-center">
            <div className="card-body">
              {
                semesterData
              }
            </div>
          </div>
        </div>
      </div>    
    );
  }
}

export default StudentInfo;