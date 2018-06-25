import React from 'react';

class CoordinatesButton extends React.Component {
  getMouseCoords = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return <button onClick={this.getMouseCoords}>Click</button>;
  }
}

export default CoordinatesButton;
