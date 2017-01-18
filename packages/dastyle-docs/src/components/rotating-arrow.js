import React, { Component } from 'react';
import triangleDown from './triangle-opened.svg';
import './rotating-arrow.scss';

export default class RotatingArrow extends Component {
  state = {
    opened: false,
  }
  _onClick() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <div className="rotating-arrow">
        <img src={triangleDown} className={this.props.opened ? 'closed' : 'opened'} role="presentation" />
      </div>
    );
  }
}

RotatingArrow.propTypes = {
  opened: React.PropTypes.bool.isRequired,
};
