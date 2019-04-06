import React, { Component } from 'react';
import TeacehrsForm from './teachers-form/TeachersForm';
import Breadcrumb from './breadcrumb/Breadcrumb';

class TeachersPage extends Component {
  render() {
    return (
      <div class="container content">
        <Breadcrumb></Breadcrumb>
        <TeacehrsForm></TeacehrsForm>
      </div>
    );
  }
}

export default TeachersPage;