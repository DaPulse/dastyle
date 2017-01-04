import React, { Component } from 'react';
import './states-text.scss';

const StatesTextComponent = ({ text }) => {
  console.log('render buttons view');
  return (
    <div className="states-text-container">
      {
        text.map(line =>
          <div className="line">
            <span className="keyWord">
              {line[0]}
            </span>
            <span className="commentedText">
              {line[1]}
            </span>
            <br />
          </div>
        )
      }
    </div>
  );
};
StatesTextComponent.propTypes = {
  buttonsToShow: React.PropTypes.string.any,
};

export default StatesTextComponent;
