import React from 'react';
import PropTypes from 'prop-types';
import './states-text.scss';

const StatesText = ({ text }) => {
  return (
    <div className="states-text-container">
      {text.map((line, index) =>
        <div key={index} className="line">
          <span className="keyWord">{line[0]}</span>
          <span className="commentedText">{line[1]}</span>
          <br />
        </div>
      )}
    </div>
  );
};
StatesText.propTypes = {
  text: PropTypes.any,
};

export default StatesText;
