import React, { Component } from 'react';

class Registrator extends Component {
  
  render() {
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
                <li className="list-group-item">
                  <input className="align-middle" type="checkbox" ></input>
                  <label className="ml-1">Subject 1</label> 
                </li>
                <li className="list-group-item">
                  <input className="align-middle" type="checkbox" ></input>
                  <label className="ml-1">Subject 2</label> 
                </li>
                <li className="list-group-item">
                  <input className="align-middle" type="checkbox" ></input>
                  <label className="ml-1">Subject 3</label> 
                </li>
                <li className="list-group-item">
                  <input className="align-middle" type="checkbox" ></input>
                  <label className="ml-1">Subject 4</label> 
                </li>
                <li className="list-group-item">
                  <input className="align-middle" type="checkbox" ></input>
                  <label className="ml-1">Subject 5</label> 
                </li>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Subject 1</td>
                    <td>13.02.19</td>
                    <td>14:00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Subject 2</td>
                    <td>13.02.19</td>
                    <td>14:00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Subject 3</td>
                    <td>13.02.19</td>
                    <td>14:00</td>
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

export default Registrator;