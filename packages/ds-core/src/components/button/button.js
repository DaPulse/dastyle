import React, { Component } from "react";
import './button.scss'

const STATUS = {
  NORMAL: 'ds-button normal',
  HOVERED: 'ds-button hovered',
  DOWN: 'ds-button down',
};

export default class Button extends Component {

  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  _onMouseUp() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseDown() {
    this.setState({class: STATUS.DOWN});
  }

  render() {
    return (
      <button
        className={this.state.class}
        href={this.props.page || '#'}
        onClick={this.props.onClick}
        onMouseDown={this._onMouseDown}
        onMouseUp={this._onMouseUp}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </button>
    );
  }

}
