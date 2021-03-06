import React, { Component } from 'react';

class Registrator extends Component {
  
  render() {

    let subjectsList = this.props.data.map((subject) => 
      <li key={subject.id} className="list-group-item">
        <div className="d-flex justify-content-between">
          <div>
            <input className="align-middle" type="checkbox" ></input>
            <label className="ml-1">{subject.name}</label>   
          </div>
          <div>
            <label className="">Credits: {subject.credits}</label>
          </div>
        </div>
      </li>
    )

    let examsList = this.props.data.map((subject, index) => 
      <tr key={subject.id}>
        <th>{index + 1}</th>
        <td>{subject.name}</td>
        <td>{subject.examDate.date}</td>
        <td>{subject.examDate.time}</td>
      </tr>    
    )

    return (
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                Register For Subject
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse">
            <div className="card-body">
              
              <ul className="list-group">

                { subjectsList }
                
              </ul>

              <button className="mt-3 btn btn-success">Submit</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
                Exams Schedule
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
            <div className="card-body">
              
              <table className="table text-center">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Day</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>

                  { examsList }
                
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>    
    );
  }
}

export default Registrator;