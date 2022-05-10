import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SWCharsPage from './SWCharsPage';
import SWCharDetail from './SWCharDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <SWCharsPage />
          </Route>
          <Route exact path='/StarWarsChars/:id'> 
            <SWCharDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}