import React from 'react';
import './App.css';
import Navbar from './components/Navbar' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; 
import Share from './pages/Share'

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
    <div>
      <h1 className="title">Connect and Share</h1>
      <p className="info">Grapevine is an open free application meant to gather and share information with the community.</p>
      <div className="matrix">
        <Matrix/>
      </div>
    </div>
  )
}

function Box(props) {
  return (
    <div className="box" id={props.position}>
      {props.value}
    </div>
  );

}

class Matrix extends React.Component {
  renderBox(data) {
    return(
      <Box position={data}/>
    );
  }
  render() {
    return(
      <div>
        <div className="matrix-row">
          {this.renderBox("top-left")}
          {this.renderBox("top-center")}
          {this.renderBox("top-right")}
        </div>
        <div className="matrix-row">
          {this.renderBox("middle-left")}
          {this.renderBox("middle-center")}
          {this.renderBox("middle-right")}
        </div>
        <div className="matrix-row">
          {this.renderBox("bottom-left")}
          {this.renderBox("bottom-center")}
          {this.renderBox("bottom-right")}
        </div>
      </div>
    )
  }
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


function Explore() {
  return (
  <h1 className="title">Explore</h1>
  )
}
