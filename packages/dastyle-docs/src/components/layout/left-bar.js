import React, { Component } from 'react';
import { Link } from 'react-router';
const _ = require('lodash');
import './left-bar.css'

export default class LeftBar extends Component {
  render () {
    console.log('render side bar');
    return (
        <div className="left-side-bar">
          {this.props.array.map(entry =>
            <Link className="side-bar-item" key={entry} to={`/${entry}`}>{entry}</Link>
          )}
        </div>
    );
  }
}
