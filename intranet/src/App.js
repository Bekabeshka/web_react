import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import LoginPage from './components/login-page/LoginPage';
import NewsPage from './components/news-page/NewsPage';
import MessagesPage from './components/messages-page/MessagesPage';
import Footer from './components/footer/Footer';
import RegistratorPage from './components/registrator-page/RegistratorPage'
import SchedulePage from './components/schedule-page/SchedulePage'
import TeachersPage from './components/teachers-page/TeachersPage'
import SettingsPage from './components/settings-page/SettingsPage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar></Navbar>
        {/* 
        <LoginPage></LoginPage>
        <NewsPage></NewsPage>
        <MessagesPage></MessagesPage>
        <PersonPage></PersonPage>
        <RegistratorPage></RegistratorPage>
        <SchedulePage></SchedulePage>
        <TeachersPage></TeachersPage>
        <SettingsPage></SettingsPage>
        */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
