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
      <p className="info">"Grapevine is an open free application meant to gather and share information with the community."</p>
      <div className="intro">
        <div className="matrix">
          <Matrix/>
        </div>
        <div className="message-details">
          <ul>
            <li>Everyday connect to someone new.</li>
            <li>Form a discussion around data you contribute</li>
            <li>See what data others have contributed</li>
          </ul>
          <button className="signup-btn" onClick={() => {
            console.log('clicked')
          }}>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}


const Box = (props) => {
  return (
    <div className="box" id={props.position}>
      <img className="avatar-img" alt="avatar" src={require('./assets/avatars/avatar_sample_'+ props.id + '.png')}/>
    </div>
  );
}

class Matrix extends React.Component {
  renderBox(data) {
    return(
      <Box position={data.position} id={data.id}/>
    );
  }
  render() {
    return(
      <div>
        <div className="matrix-row">
          {this.renderBox({position: "top-left", id: 1})}
          {this.renderBox({position: "top-center", id: 2})}
          {this.renderBox({position: "top-right", id: 3})}
        </div>
        <div className="matrix-row">
          {this.renderBox({position: "middle-left", id: 4})}
          {this.renderBox({position: "middle-center", id: 5})}
          {this.renderBox({position: "middle-right", id: 6})}
        </div>
        <div className="matrix-row">
          {this.renderBox({position: "bottom-left", id: 7})}
          {this.renderBox({position: "bottom-center", id: 8})}
          {this.renderBox({position: "bottom-right", id: 9})}
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
