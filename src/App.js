import React from 'react';
import './App.css';
import HomeContentCont from './components/homeContentCont';
import Login from './components/login';
import Github from './components/github';
import Websites from './components/websites';
import Apps from './components/apps';
import IoT from '.components/iot';
import Network from './components/network';

import {
  BrowserRouter as Router, 
  Link, 
  Switch, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/github">GitHub</Link></li>
              <li><Link to="/websites">Websites</Link></li>
              <li><Link to="/apps">Apps</Link></li>
              <li><Link to="/iot">IoT</Link></li>
              <li><Link to="/network">Network</Link></li>
            </ul>
          </nav>
          
          <switch>
            <Route path="/github"><Github /></Route>
            <Route path="/website"><Website /></Route>
            <Route path="/apps"><Apps /></Route>
            <Route path="/iot"><IoT /></Route>
            <Route path="/network"><Network /></Route>
            <Route path="/"><HomeContentCont /></Route>
          </switch>
        </div>
      </Router>
      
    </React.Fragment>
  );
}

export default App;