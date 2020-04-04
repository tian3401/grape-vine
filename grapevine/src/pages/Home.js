import React from 'react';
import Matrix from '../components/Matrix';

export default function Home() {
  return(
    <div>
      <h1 className="content__center--default">Connect and Share</h1>
      <p className="content__center--default">"Grapevine is an open free application meant to gather and share information with the community."</p>
      <div className="container__main--default">
        <div className="container__main--default">
          <Matrix/>
        </div>
        <div className="message__list--default">
          <ul>
            <li>Everyday connect to someone new.</li>
            <li>Form a discussion around data you contribute</li>
            <li>See what data others have contributed</li>
          </ul>
          <button className="btn__main--round" onClick={() => {
            console.log('clicked')
          }}>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}