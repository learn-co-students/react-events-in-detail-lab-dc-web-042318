// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  btnClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return <button onClick={this.btnClick}>Click Me</button>;
  }
}

export default CoordinatesButton;
