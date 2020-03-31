import React from 'react';
import './App.css';
import Navbar from './components/Navbar' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; 

export default function App() {
  return (
    <div class="App">
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
  return <h2>Share</h2>
  
}
function Explore() {
  return <h2>Explore</h2>
}
