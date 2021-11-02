import React from 'react'
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import AboutMe from './components/AboutMe';
import Resumes from './components/Resumes';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <NavMenu />
            <Header />
          </Route>
          <Route path="/aboutMe">
            <AboutMe/>
          </Route>
          <Route path="/resumes">
            <Resumes/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;