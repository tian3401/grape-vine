import React from 'react';
import '../styles/matrixStyles.modules.css';

const Box = (props) => {
  return (
    <div className="matrix__box" id={props.position}>
      <img className="matrix__avatar-img" alt="avatar" src={require('../assets/avatars/avatar_sample_'+ props.id + '.png')}/>
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
        <div className="matrix__row">
          {this.renderBox({position: "top-left", id: 1})}
          {this.renderBox({position: "top-center", id: 2})}
          {this.renderBox({position: "top-right", id: 3})}
        </div>
        <div className="matrix__row">
          {this.renderBox({position: "middle-left", id: 4})}
          {this.renderBox({position: "middle-center", id: 5})}
          {this.renderBox({position: "middle-right", id: 6})}
        </div>
        <div className="matrix__row">
          {this.renderBox({position: "bottom-left", id: 7})}
          {this.renderBox({position: "bottom-center", id: 8})}
          {this.renderBox({position: "bottom-right", id: 9})}
        </div>
      </div>
    )
  }
}

export default Matrix;