import React, { Component } from 'react';

class SettingsForm extends Component {
  
  render() {
    return (
      <div className="mr-auto ml-auto settings col-md-8 col-12">
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@gmail.com"></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-3 col-form-label">Current Password</label>
          <div className="col-sm-9">
            <input type="password" className="form-control" placeholder="Current Password"></input>
          </div>
        </div>
        <div className="form-group row">
            <label for="inputPassword" className="col-sm-3 col-form-label">New Password</label>
            <div className="col-sm-9">
              <input type="password" className="form-control" placeholder="New Password"></input>
            </div>
        </div>
        <button type="button" className="btn btn-success">Submit</button>
      </div>
    );
  }
}

export default SettingsForm;