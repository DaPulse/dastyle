import React, { Component } from 'react';
import triangleClosed from './triangle-closed.svg';
import triangleOpened from './triangle-opened.svg';
import './rotating-arrow.css';

export default class RotatingArrow extends Component {
  _onClick() {
    this.setState({
      opend: !this.state.opend,
    });
  }

  generateArrow() {
    if (this.props.opened) {
      return (<img src={triangleOpened} role="presentation" />);
    }
    return (<img src={triangleClosed} role="presentation" />);
  }
  render() {
    console.log('render side bar');
    return (
      <div className="rotating-arrow">
        {this.generateArrow()}
      </div>
    );
  }
}

RotatingArrow.propTypes = {
  opened: React.PropTypes.bool.isRequired,
};
