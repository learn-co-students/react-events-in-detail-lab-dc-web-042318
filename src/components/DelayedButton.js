// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.persist();
		return setTimeout(
			() => this.props.onDelayedClick(event),
			this.props.delay
		);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Find Coordinates</button>
			</div>
		);
	}
}

export default DelayedButton;
