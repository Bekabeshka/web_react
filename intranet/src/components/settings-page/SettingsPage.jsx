import React, { Component } from 'react';
import SettingsForm from './settings-form/SettingsForm';

class SettingsPage extends Component {
  render() {
    return (
      <div class="container content">
        <SettingsForm></SettingsForm>
      </div>
    );
  }
}

export default SettingsPage;