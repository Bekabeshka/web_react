import React, { Component } from 'react';
import './PersonCard.css'

class PersonCard extends Component {
  render() {
    return (
      <div className="row p-card">
        <div className="col-md-5 col-12">
          <img src="https://img.freepik.com/free-photo/smiling-student_1301-114.jpg?size=626&ext=jpg" className="img-thumbnail img-fluid" alt="Responsive image"></img>
        </div>
        <div className="col-md-7 col-12">
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">
                  <div className="col-3 bold">Name: </div>
                <div className="col-9">Bekdaulet</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-3 bold">Surname: </div>
                <div className="col-9">Kassymov</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-3 bold">Faculty: </div>
                <div className="col-9">FIT</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-3 bold">Speciality: </div>
                <div className="col-9">IS</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-3 bold">GPA: </div>
                <div className="col-9">3.0</div>
              </div>
            </li>
          </ul>
          
        </div>
      </div>      
    );
  }
}

export default PersonCard;