import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Inicio from './components/Inicio';

export const App = () => {

  return (
    <Router>
      <div>
      </div>
      <Switch> 
        <Route path='/' exact={true}> <Inicio/> </Route>
      </Switch>
    </Router>
  )
}
export default App;