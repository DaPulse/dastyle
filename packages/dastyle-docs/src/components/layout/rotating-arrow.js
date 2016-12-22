import React, {Component} from 'react';
import {Link} from 'react-router';
const _ = require('lodash');
import './rotating-arrow.css'

export default class RotatingArrow extends Component {
    constructor() {
      super();
    }

    _onClick() {
      this.setState( {opend: !this.state.opend} )
    }

    render() {
        console.log('render side bar');
        return (
            <div className="rotating-arrow">
              ^
            </div>
        );
    }
}
