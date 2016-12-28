import React, {Component} from 'react';
import './colors-view.scss';
import colorsObj from './colors-object';

const ColorDisplayComponent = ({ colorHex, colorTitle,colorText }) => {
  console.log('render colors view');
  return (
    <div
      className="color-display-container"
      style={{ backgroundColor: this.props.colorHex }}
    >
      <span className="hex-title">
        {colorHex}
      </span>
      <div className="color-display-text-container mouseOut">
        <span className="color-title">
          {colorTitle}
        </span>
        <span className="color-text">
          {colorText}
        </span>
      </div>
      <div className="color-display-text-container mouseIn">
        <span className="copy-text">
          Click to copy
        </span>
      </div>
    </div>
  );
};

ColorDisplayComponent.propTypes = {
  colorHex: React.PropTypes.string.isRequired,
  colorTitle: React.PropTypes.string.isRequired,
  colorText: React.PropTypes.string.isRequired,
};

export default ColorDisplayComponent;
