import React from 'react';

class DelayedButton extends React.Component {
  delayClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.delayClick}>Delayed</button>;
  }
}

export default DelayedButton;
