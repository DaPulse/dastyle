import React, { Component } from 'react';
import './color-family.scss';
import { ColorDisplayComponent } from './color-display';

const ColorFamilyComponent = ({ colorObj }) => {
  console.log('render colors view');
  return (
    <div className="color-view-container">
      <span className="colors-main-title">
        {colorObj[tabName].title}
      </span>
      <span className="colors-description-text">
        {colorObj[tabName].text}
      </span>
      <div className="color-container">
        {
          colorObj[tabName].colorsArray.map(colorData =>
            <ColorDisplayComponent
              colorHex={colorData.colorHex}
              colorTitle={colorData.colorTitle}
              colorText={colorData.colorText}
            />,
          )
        }
      </div>
    </div>
  );
};
ColorFamilyComponent.propTypes = {
  colorsObj: React.PropTypes.any,
};

export default ColorFamilyComponent;
