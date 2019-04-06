import React, { Component } from 'react';
import './PersonCard.css'

class PersonCard extends Component {
  render() {
    return (
      <div class="row p-card">
        <div class="col-md-5 col-12">
          <img src="https://img.freepik.com/free-photo/smiling-student_1301-114.jpg?size=626&ext=jpg" class="img-thumbnail img-fluid" alt="Responsive image"></img>
        </div>
        <div class="col-md-7 col-12">
          
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                  <div class="col-3 bold">Name: </div>
                <div class="col-9">Bekdaulet</div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-3 bold">Surname: </div>
                <div class="col-9">Kassymov</div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-3 bold">Faculty: </div>
                <div class="col-9">FIT</div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-3 bold">Speciality: </div>
                <div class="col-9">IS</div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-3 bold">GPA: </div>
                <div class="col-9">3.0</div>
              </div>
            </li>
          </ul>
          
        </div>
      </div>      
    );
  }
}

export default PersonCard;