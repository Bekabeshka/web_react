import React, { Component } from 'react';
import ScheduleForm from './schedule-form/ScheduleForm';

class SchedulePage extends Component {
  render() {

    return (
      <div className="container content">
        <ScheduleForm data={scheduleData}></ScheduleForm>
      </div>
    );
  }
}

let scheduleData = [
  {
    id: 1,
    name: 'OOP',
    schedule: [
      ['Monday', '14:00'],
      ['Monday', '15:00'],
      ['Monday', '16:00'],
      ['Wednesday', '12:00'],
      ['Wednesday', '13"00']
    ]
  },
  {
    id: 2,
    name: 'Algorithms',
    schedule: [
      ['Tueusday', '8:00'],
      ['Tueusday', '9:00'],
      ['Tueusday', '10:00'],
    ]
  },
  {
    id: 3,
    name: 'Economics',
    schedule: [
      ['Friday', '17:00'],
      ['Friday', '18:00'],
      ['Friday', '19:00'],
    ]
  }
]

export default SchedulePage;