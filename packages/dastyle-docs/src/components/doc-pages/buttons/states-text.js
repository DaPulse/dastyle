import React, { Component } from 'react';
import './states-text.scss';

const StatesText = ({ text }) => {
  return (
    <div className="states-text-container">
      {
        text.map(line =>
          <div className="line">
            <span className="keyWord">{line[0]}</span>
            <span className="commentedText">{line[1]}</span>
            <br />
          </div>
        )
      }
    </div>
  );
};
StatesText.propTypes = {
  text: React.PropTypes.any,
};

export default StatesText;
