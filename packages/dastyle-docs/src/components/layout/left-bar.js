import React, {Component} from 'react';
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
                {_.keys(this.props.labels).map(entry =>
                //  <Link className="side-bar-item" key={entry} to={`/${entry}`}>{entry}</Link>
                 <LeftBarItem title={entry} innerItemsNames={ this.props.labels[entry] } items={this.props.items}/>)}
            </div>
        );
    }
}
