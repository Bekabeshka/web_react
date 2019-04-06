import React, { Component } from 'react';

class StudentInfo extends Component {
  render() {
    return (
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                View Currnet Attestation
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" class="collapse show">
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
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
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
                View Transcript
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse">
            <div class="card-body">
              <h5>Semester 1</h5>
              <table class="table table-striped">
                <thead class="thead-dark">
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