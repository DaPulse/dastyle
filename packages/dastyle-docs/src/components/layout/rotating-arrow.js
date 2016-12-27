import React, {Component} from 'react';
import {Link} from 'react-router';
const _ = require('lodash');
import './rotating-arrow.css'
import triangleClosed from './triangle-closed.svg';
import triangleOpened from './triangle-opened.svg';

export default class RotatingArrow extends Component {
    constructor() {
      super();
    }

    _onClick() {
      this.setState( {opend: !this.state.opend} )
    }

    generateArrow()
    {
      if (this.props.opened)
      {
        return (<img src={triangleOpened}/>)
      }
      else
      {
        return (<img src={triangleClosed}/>)
      }
    }
    render() {
        console.log('render side bar');
        return (
            <div className="rotating-arrow">
              {this.generateArrow()}
            </div>
        );
    }
}
