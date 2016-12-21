import React, { Component } from "react";

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
  DOWN: 'down',
};

export default class Button extends React.Component {

  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onClick = this._onClick.bind(this);

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
    // TODO: make it happen :)
  }

  _onMouseDown() {
    this.setState({class: STATUS.DOWN});
  }

  _onClick() {

  }

  render() {
    return (
      <button
        className={this.state.class}
        href={this.props.page || '#'}
        onClick={this._onClick}
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
