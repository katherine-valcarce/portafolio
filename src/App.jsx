import React from 'react'
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';


const App = () => {

  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <NavMenu/>
            <Header />
          </Route>
          <Route path="/aboutMe">
            <NavMenu/>
            <AboutMe/>
          </Route>
          <Route path="/projects">
          <NavMenu />
            <Projects/>
          </Route>
          <Route path="/contacts">
          <NavMenu/>
            <Contacts/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;