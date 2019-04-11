import React, { Component } from 'react';
import PersonCard from './person-card/PersonCard';
import StudentInfo from './student-info/StudentInfo';

class PersonPage extends Component {
  render() {
    return (
      <div className="container content">
        <PersonCard person={personData}></PersonCard>
        <StudentInfo semestersData={semestersData} attestationsData={attestationsData}></StudentInfo>
      </div>
    );
  }
}

let attestationsData = [
  {
    id: 1,
    name: 'Subject 1',
    attestation1: 30,
    attestation2: 30,
    final: 40
  },
  {
    id: 2,
    name: 'Subject 2',
    attestation1: 30,
    attestation2: 30,
    final: 35
  },
  {
    id: 3,
    name: 'Subject 3',
    attestation1: 20,
    attestation2: 20,
    final: 30
  }
]

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
    name: 'Semester 1',
    attestationsData: [
      {
        id: 1,
        name: 'Subject 1',
        attestation1: 30,
        attestation2: 30,
        final: 40
      },
      {
        id: 2,
        name: 'Subject 2',
        attestation1: 30,
        attestation2: 30,
        final: 35
      }
    ]

  },
  {
    id: 2,
    name: 'Semester 2',
    attestationsData: [
      {
        id: 1,
        name: 'Subject 1',
        attestation1: 30,
        attestation2: 30,
        final: 40
      },
      {
        id: 2,
        name: 'Subject 2',
        attestation1: 30,
        attestation2: 30,
        final: 35
      }
    ]
  }
]

export default PersonPage;