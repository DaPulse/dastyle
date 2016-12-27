import React, {Component} from 'react';
import {Link} from 'react-router';
import RotatingArrow from './rotating-arrow'
const _ = require('lodash');
import './left-bar-item.scss'

export default class LeftBarItem extends Component {
    constructor()
    {
        super();
        this._onArrowClick = this._onArrowClick.bind(this);
        this.state = {
            opened: false
        }

    }
    _onArrowClick()
    {
        console.log("click");
        this.setState({
            opened: !this.state.opened
        })
    }
    subMenuGenerator(isOpened)
    {
        if (isOpened) {
            return (this.props.innerItemsNames.map(entry =>
              <div className="side-bar-sub-item">
                <Link key={entry} to={`/${entry}`}>{entry}</Link>
              </div>
              ));
        } else {
            return;
        }
    }
    render() {
        console.log('render left bar item');
        return (
            <div className="left-bar-item">
                <div className="left-bar-shown-line" onClick={() => this._onArrowClick()}>
                    <div>
                        <RotatingArrow opened={this.state.opened}/>
                    </div>
                    <span className="item-title">
                        {this.props.title}
                    </span>
                </div>
                <div className="sub-menu">
                    {this.subMenuGenerator(this.state.opened)}
                </div>
            </div>
        );
    }
}
