import React, { Component } from 'react';
import PersonCard from './person-card/PersonCard';
import StudentInfo from './student-info/StudentInfo';

class PersonPage extends Component {
  render() {
    return (
      <div className="container content">
        <PersonCard person={personData}></PersonCard>
        <StudentInfo data={semestersData}></StudentInfo>
      </div>
    );
  }
}

let personData = {
  name: 'Bekdaulet',
  surname: 'Kassymov',
  faculty: 'FIT',
  speciality: 'IS',
  gpa: '3.43',
  avatarSrc: 'https://img.freepik.com/free-photo/smiling-student_1301-114.jpg?size=626&ext=jpg'
}

let semestersData = [
  {
    id: 1,
    name: 'Fall semester 2016',
    attestationData: [
      {
        id: 1,
        name: 'Kazakh',
        attestation1: 30,
        attestation2: 30,
        final: 40
      },
      {
        id: 2,
        name: 'English',
        attestation1: 30,
        attestation2: 30,
        final: 35
      }
    ]

  },
  {
    id: 2,
    name: 'Spring semester 2017',
    attestationData: [
      {
        id: 3,
        name: 'Calculus I',
        attestation1: 30,
        attestation2: 30,
        final: 40
      },
      {
        id: 4,
        name: 'Calculus II',
        attestation1: 30,
        attestation2: 30,
        final: 35
      }
    ]
  },
  {
    id: 2,
    name: 'Fall semester 2017',
    attestationData: [
      {
        id: 5,
        name: 'OOP',
        attestation1: 20,
        attestation2: 35,
        final: 37
      },
      {
        id: 6,
        name: 'Algorithms',
        attestation1: 10,
        attestation2: 30,
        final: 35
      }
    ]
  }
]

export default PersonPage;