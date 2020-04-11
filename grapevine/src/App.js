import React from 'react';
import './App.css';
import Navbar from './components/Navbar' 
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'; 
import Share from './pages/Share';
import Home from './pages/Home';
import Explore from './pages/Explore'
import CreateRoute from './components/Routes';


export default function App() {
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




