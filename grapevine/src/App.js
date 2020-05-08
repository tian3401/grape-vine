import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'; 
import Home from './pages/Home';
import Share from './pages/Share';
import Explore from './pages/Explore';
import { Navbar, CreateRoute } from './components/index';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <CreateRoute exact path="/" components={Home}/>
          <CreateRoute path="/share" components={Share}/>
          <CreateRoute path="/explore" components={Explore}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App; 





