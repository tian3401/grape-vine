import React from 'react';
import './App.css';
import Navbar from './components/Navbar' 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 

function App() {
  return (
    <div class="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/">
          </Route>
          <Route path="/share">
            <Share/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

function Share() {
  return <h2>Share</h2>
  
}

export default App;
