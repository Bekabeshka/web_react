import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
import LoginPage from './components/login-page/LoginPage';
import NewsPage from './components/news-page/NewsPage';
import MessagesPage from './components/messages-page/MessagesPage';
import Footer from './components/footer/Footer';
import RegistratorPage from './components/registrator-page/RegistratorPage'
import SchedulePage from './components/schedule-page/SchedulePage'
import FacultyTeachersPage from './components/faculty-teachers-page/FacultyTeachersPage';
import SettingsPage from './components/settings-page/SettingsPage';
import PersonPage from './components/person-page/PersonPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Route path='/' exact component={LoginPage}/>
        <Route path='/logged' component={Navbar}/>
        <Route path='/logged/news' component={NewsPage}/>
        <Route path='/logged/teachers' component={FacultyTeachersPage}/>
        <Route path='/logged/registrator' component={RegistratorPage}/>
        <Route path='/logged/schedule' component={SchedulePage}/>
        <Route path='/logged/person-card' component={PersonPage}/>
        <Route path='/logged/person-messages' component={MessagesPage}/>
        <Route path='/logged/person-settings' component={SettingsPage}/>
        <Route path='/logged' component={Footer}/>

      </BrowserRouter>
    );
  }
}

export default App;
