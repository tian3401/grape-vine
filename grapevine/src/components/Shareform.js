import React from 'react';
import '../styles/shareformStyles.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      dataLabel: "",
      dataPoint: "",
      location: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target,
          value  = target.value,
          name   = target.name; 
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(`submitted form with following details => name: ${this.state.name} email: ${this.state.email} data label: ${this.state.dataLabel} data point: ${this.state.dataPoint} location: ${this.state.location} `)
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <label>name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <label>email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
        <label>data label:</label>
        <input type="text" name="dataLabel" value={this.state.dataLabel} onChange={this.handleChange}/>
        <label>data point:</label>
        <input type="text" name="dataPoint" value={this.state.dataPoint} onChange={this.handleChange}/>
        <label>location:</label>
        <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
};

export default Login; 

