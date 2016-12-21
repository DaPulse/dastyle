import React, { Component } from 'react';
import { Link } from 'react-router';
const _ = require('lodash');
import './left-bar-item.css'

export default class LeftBarItem extends Component {
  render () {
    console.log('render left bar item');
    return (
        <div className="left-bar-item">
          <span className="item-title">
            Title
          </span>
          <div className="triangle">
            
          </div>
        </div>
    );
  }
}
