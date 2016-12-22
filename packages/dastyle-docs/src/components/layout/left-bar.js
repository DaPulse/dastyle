import React, {Component} from 'react';
import {Link} from 'react-router';
const _ = require('lodash');
import './left-bar.scss'
import LeftBarItem from './left-bar-item'
import dapulseLogo from './dapulse_style_logo.svg'

export default class LeftBar extends Component {
    render() {
        console.log('render side bar');
        return (
            <div className="left-side-bar">
                <img className="dapulse-logo" src={dapulseLogo}/>
                {this.props.array.map(entry =>
                //  <Link className="side-bar-item" key={entry} to={`/${entry}`}>{entry}</Link>
                 <LeftBarItem title={entry} innerItems={this.props.object[entry]}/>)}
            </div>
        );
    }
}
