import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar'
import LoginForm from './components/login-form/LoginForm'
import NewsCard from './components/news-card/NewsCard'
import Pagination from './components/pagination/Pagination'
import Footer from './components/footer/Footer'
import MessageCard from './components/message-card/MessageCard'
import PersonCard from './components/person-card/PersonCard'
import StudentInfo from './components/student-info/StudentInfo'
import Registrator from './components/registrator/Registrator'
import Schedule from './components/schedule/Schedule'
import SettingsForm from './components/settings-form/SettingsForm'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import Teachers from './components/teachers/Teachers'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar></Navbar>
        {/*
        <div class="login-page d-flex w-100 justify-content-center align-items-center h-100vh">
          <LoginForm></LoginForm>
        </div>
        */}
        <div class="container content">
          {/*
          <div className="news-page">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          
            <div class="d-flex justify-content-center">
              <Pagination></Pagination>
            </div>
          </div>
          */}
          {/*
          <MessageCard></MessageCard>
          */}
          {/* 
          <PersonCard></PersonCard>
          <StudentInfo></StudentInfo>
          */}
          {/*
          <Registrator></Registrator>
          */}
          {/*
          <Schedule></Schedule>
          */}
          {/* 
          <SettingsForm></SettingsForm>
          */}
          {/* 
          <Breadcrumb></Breadcrumb>
          <Teachers></Teachers>
          */}          
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
