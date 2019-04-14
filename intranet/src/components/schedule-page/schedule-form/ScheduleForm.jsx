import React, { Component } from 'react';
import './ScheduleForm.css';

class Schedule extends Component {

  render() {

    let temp = timeList.map((time, index) =>
      <tr key={index}>
        <th>{time}</th>
        
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        
      </tr>
    )

    let weekDaysList = weekDays.map((day) => 
      <th scope='col'>{day}</th>
    )

    return (
      <div className="table-responsive-sm">

        <table className="s-table table table-hover text-center">
          <thead>
            <tr>
              <th>Time</th>
              { weekDaysList }
            </tr>
          </thead>
          <tbody>
            { temp }
          </tbody>
        </table>
      </div>    
    );
  }
}

let weekDays = [
  'Monday', 'Tueusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

let timeList = [
  '8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', 
  '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '19:00 - 20:00'
]

export default Schedule;