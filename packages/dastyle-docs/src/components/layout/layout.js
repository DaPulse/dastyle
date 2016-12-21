import React, { Component } from 'react';
import LeftBar from './left-bar'
import MainBar from './main-bar'
const _ = require('lodash');
import './layout.css'

export default class Layout extends Component {
  render () {
    console.log('render layout');
    console.log(this.props.route.items);
    return (
      <div className="flexcontainer">
        <LeftBar array={_.keys(this.props.route.items)}/>
        <MainBar showThis={this.props.children}/>
      </div>
    );
  }
}
