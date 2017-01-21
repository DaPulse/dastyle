import React from 'react';
import ColorDisplayComponent from './color-display';
import './color-family.scss';

const ColorFamilyComponent = ({ colorFamilyObject, colorCopyMode }) => {
  console.log('render colors view');
  return (
    <div className="color-family-container">
      <span className="colors-main-title">
        {colorFamilyObject.title}
      </span>
      <br />
      <br />
      <span className="colors-description-text">
        {colorFamilyObject.text}
      </span>
      <br />
      <div className="color-container">
        {
          colorFamilyObject.colorsArray.map(colorData =>
            <ColorDisplayComponent
              colorName={colorData.colorName}
              colorTitle={colorData.colorTitle}
              colorText={colorData.colorText}
              copyOption={colorCopyMode}
            />,
          )
        }
      </div>
    </div>
  );
};
ColorFamilyComponent.propTypes = {
  colorFamilyObject: React.PropTypes.any,
  colorCopyMode: React.PropTypes.number.isRequired,
};

export default ColorFamilyComponent;
