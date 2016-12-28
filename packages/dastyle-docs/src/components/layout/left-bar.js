import React, { Component } from 'react';
import './left-bar.scss';
import LeftBarItem from './left-bar-item';
import dapulseLogo from './dapulse_style_logo.svg';

const _ = require('lodash');


const LeftBarComponent = ({ labels, items }) => {
  console.log('render side bar');
  return (
    <div className="left-side-bar">
      <img className="dapulse-logo" role="presentation" src={dapulseLogo} />
      {_.keys(labels).map(entry =>
        <LeftBarItem
          title={entry}
          innerItemsNames={labels[entry]}
          items={items}
          key={entry}
        />,
        )
      }
    </div>
  );
};
LeftBarComponent.propTypes = {
  labels: React.PropTypes.objectOf(React.PropTypes.array).isRequired,
  items: React.PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default LeftBarComponent;
