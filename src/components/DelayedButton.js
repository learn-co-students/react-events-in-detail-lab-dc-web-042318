// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
  btnClick = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.btnClick} />;
  }
}

export default DelayedButton;
