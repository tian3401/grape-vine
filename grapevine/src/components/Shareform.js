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
      location: "",
      classValue: "form__input--round"
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
    event.preventDefault();
    this.toggleClass(); 
    console.log(`submitted form with following details => name: ${this.state.name} email: ${this.state.email} data label: ${this.state.dataLabel} data point: ${this.state.dataPoint} location: ${this.state.location} `)
  }

  toggleClass() {
    let element = (this.state.classValue === "form__input--round") ? "form__input-round_clicked" : "form__input--round";
    this.setState({
      "classValue": element
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <label>name:</label>
        <input type="text" name="name" className={this.state.classValue} value={this.state.name} onChange={this.handleChange}/>
        <label>email:</label>
        <input type="text" name="email" className={this.state.classValue}  value={this.state.email} onChange={this.handleChange}/>
        <label>data label:</label>
        <input type="text" name="dataLabel"  className={this.state.classValue} value={this.state.dataLabel} onChange={this.handleChange}/>
        <label>data point:</label>
        <input type="text" name="dataPoint" className={this.state.classValue}  value={this.state.dataPoint} onChange={this.handleChange}/>
        <label>location:</label>
        <input type="text" name="location" className={this.state.classValue}  value={this.state.location} onChange={this.handleChange}/>
        <input className="btn__main--round" type="submit" value="Submit"/>
      </form>
    )
  }
};

export default Login; 

