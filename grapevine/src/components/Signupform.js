import React from 'react';
import '../styles/formStyles.css';
import fireApp from '../config/firebase';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    const target = e.target,
          value  = e.target.value,
          key   = target.name
    this.setState({
      [key]: value
    });
  }
  
 
  authenticateUserEmail = (email) => {
    const validExp = RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'); 
    return validExp.test(String(email).toLowerCase()); 
  }

  createUser = (e) => {
    e.preventDefault();

    if(!this.authenticateUserEmail(this.state.email)) {
      alert('please check your email and ensure it is valid.')
      return; 
    }

    fireApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((err) => {
      let errorCode = err.code,
      errorMessage = err.message; 
      console.log('This is the error code: ',errorCode);
      console.log(errorMessage);
    })
  }


  render() {
    return (
      <div className="card__main--default">
        <form className="form" onSubmit={this.createUser}>
          <label>first name:</label>
          <input type="text" name="firstName" className="form__input--standard" value={this.state.firstName} onChange={this.handleChange}/>
          <label>last name:</label>
          <input type="text" name="lastName" className="form__input--standard" onChange={this.handleChange} value={this.state.lastName}/>
          <label>username:</label>
          <input type="text" name="userName"  className="form__input--standard" value={this.state.userName} onChange={this.handleChange} />
          <label>email:</label>
          <input type="text" name="email" className="form__input--standard" value={this.state.email} onChange={this.handleChange} />
          <label>password:</label>
          <input type="password" name="password" className="form__input--standard" value={this.state.password} onChange={this.handleChange} />
          <input type="submit" className="btn__main--round"  value="Open Sesame"/>
        </form>
      </div>
      
    )
  }

};

export default Login; 