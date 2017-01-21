import React from 'react';
import LeftBarItem from './left-bar-item';
import dapulseLogo from './dapulse_style_logo.svg';
import './left-bar.scss';

const _ = require('lodash');


const LeftBar = ({ labels, items }) => {
  return (
    <div className="left-side-bar">
      <img className="dapulse-logo" role="presentation" src={dapulseLogo} />
      {_.keys(labels).map(label =>
        <LeftBarItem
          title={label}
          innerItemsNames={labels[label]}
          items={items}
          key={label}
        />,
        )
      }
    </div>
  );
};
LeftBar.propTypes = {
  labels: React.PropTypes.objectOf(React.PropTypes.array).isRequired,
  items: React.PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default LeftBar;
