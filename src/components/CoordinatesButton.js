import React from "react";

class CoordinatesButton extends React.Component {
	constructor(props) {
		super(props);
		this.findCoordinates = this.findCoordinates.bind(this);
	}

	findCoordinates(event) {
		const coordinates = [event.pageX, event.pageY];
		this.props.onReceiveCoordinates(coordinates);
	}

	render() {
		return (
			<div>
				<button onClick={this.findCoordinates}>Find Coordinates</button>
			</div>
		);
	}
}

export default CoordinatesButton;
