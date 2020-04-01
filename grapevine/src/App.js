import React from 'react';
import './App.css';
import Navbar from './components/Navbar' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; 
import Shareform from './components/Shareform'

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

function Home() {
  return(
    <div></div>
  )
}

function CreateRoute(props) {
  return(
    <Route
      path={props.path}
    >
      {props.components}
    </Route>
  )
}

function Share() {
  return (
  <div>
    <h1 className="title">Thanks for Sharing</h1>
    <Shareform/>
  </div>
 
  )
  
}
function Explore() {
  return <h2>Explore</h2>
}
