import React, { Component } from 'react';
import './colors-view.scss';
import colorsObj from './colors-data';
import { ColorFamilyComponent } from './color-family';

const ColorsViewComponent = ({ tabName }) => {
  console.log('render colors view');
  return (
    <div className="colors-view-container">
      {colorsObj[tabName].map(colorFamilyObject =>
        <ColorFamilyComponent colorObj={colorFamilyObject} />,
      )}
    </div>
  );
};
ColorsViewComponent.propTypes = {
  tabName: React.PropTypes.string.isRequired,
};

export default ColorsViewComponent;
