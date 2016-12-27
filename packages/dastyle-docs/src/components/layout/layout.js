import React, { Component } from 'react';
import LeftBar from './left-bar'
import MainBar from './main-bar'
const _ = require('lodash');
import './layout.scss'

export default class Layout extends Component {
  render () {
    console.log('render layout');
    console.log(this.props.route.items);
    return (
      <div className="main-container">
        <LeftBar items={this.props.route.items} labels={this.props.route.labels}/>
        <MainBar showThis={this.props.children}/>
      </div>
    );
  }
}
