import React from 'react';
import { Signupform } from '../components/index'; 
import { FirebaseContext } from '../firebase';

export default function Explore() {
  return (
  <div style={{textAlign: "center"}}>
    <h1 className="content__center--default">Explore</h1>
    <FirebaseContext.Consumer>
      {firebase => <Signupform firebase={firebase}/>}
    </FirebaseContext.Consumer>
  </div>
  )
}