import React, { Component } from 'react';
import { Link } from 'react-router';
const _ = require('lodash');
import './layout.css'

export default class Layout extends Component {
  render () {
    console.log('render layout');
    console.log(this.props.route.items);
    return (
      <div className="flexcontainer">
        <div className="left-side-bar">
          {_.keys(this.props.route.items).map(entry =>
            <Link key={entry} to={`/${entry}`}>{entry}<br/></Link>
          )}
        </div>
        <div className='main-bar'>
          {this.props.children}
        </div>
      </div>
    );
  }
}