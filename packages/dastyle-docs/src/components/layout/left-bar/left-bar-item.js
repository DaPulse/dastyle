import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RotatingArrow from '../../rotating-arrow';
import './left-bar-item.scss';

export default class LeftBarItem extends Component {
  state = {
    opened: false,
  };

  onArrowClick = () => this.setState({ opened: !this.state.opened })

  subMenuGenerator(isOpened) {
    if (isOpened) {
      return (this.props.innerItemsNames.map(entry => <div className="side-bar-sub-item">
        <Link key={entry} to={`/${entry}`}>{entry}</Link>
      </div>));
    }
    return [];
  }
  render() {
    return (
      <div className="left-bar-item">
        <div className="left-bar-shown-line" onClick={() => this.onArrowClick()}>
          <div>
            <RotatingArrow opened={this.state.opened} />
          </div>
          <span className="item-title">
            {this.props.title}
          </span>
        </div>
        <div className="sub-menu">
          {this.subMenuGenerator(this.state.opened)}
        </div>
      </div>
    );
  }
}

LeftBarItem.propTypes = {
  innerItemsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};
