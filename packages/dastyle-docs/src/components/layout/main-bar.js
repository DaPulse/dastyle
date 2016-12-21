import React, { Component } from 'react';
const _ = require('lodash');
import './main-bar.css'

export default class MainBar extends Component {
  render () {
    console.log('render side bar');
    return (
      <div className='main-bar'>
        {this.props.showThis}
      </div>
    );
  }
}
