import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import NewsPage from './components/news-page/NewsPage';
import MessagesPage from './components/messages-page/MessagesPage';
import Footer from './components/footer/Footer';
import RegistratorPage from './components/registrator-page/RegistratorPage'
import SchedulePage from './components/schedule-page/SchedulePage'
import FacultyTeachersPage from './components/faculty-teachers-page/FacultyTeachersPage';
import SettingsPage from './components/settings-page/SettingsPage';
import PersonPage from './components/person-page/PersonPage';

class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <Navbar></Navbar>
        <Route path='/news' component={NewsPage}/>
        <Route path='/faculties' component={FacultyTeachersPage}/>
        <Route path='/registrator' component={RegistratorPage}/>
        <Route path='/schedule' component={SchedulePage}/>
        <Route path='/person-card' component={PersonPage}/>
        <Route path='/person-messages' component={MessagesPage}/>
        <Route path='/person-settings' component={SettingsPage}/>
        <Footer></Footer>

      </BrowserRouter>
    );
  }
}

export default AppComponent;