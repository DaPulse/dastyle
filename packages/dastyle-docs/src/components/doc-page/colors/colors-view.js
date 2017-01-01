import React, { Component } from 'react';
import './colors-view.scss';
import ColorFamilyComponent from './color-family';

const ColorsViewComponent = ({ colorFamiliesArray, colorCopyMode }) => {
  console.log('render colors view');
  return (
    <div className="colors-view-container">
      {colorFamiliesArray.map(colorFamilyObject =>
        <ColorFamilyComponent
          colorFamilyObject={colorFamilyObject}
          colorCopyMode={colorCopyMode}
        />,
      )}
    </div>
  );
};
ColorsViewComponent.propTypes = {
  colorFamiliesArray: React.PropTypes.any,
  colorCopyMode: React.PropTypes.number.isRequired,
};

export default ColorsViewComponent;
