import React, { Component } from 'react';
import ScheduleForm from './schedule-form/ScheduleForm';

class SchedulePage extends Component {
  render() {
    return (
      <div class="container content">
        <ScheduleForm></ScheduleForm>
      </div>
    );
  }
}

export default SchedulePage;