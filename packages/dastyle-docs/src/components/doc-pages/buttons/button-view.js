import React, { Component } from 'react';
import './button-view.scss';
import ButtonFamily from './button-family';

const ButtonView = ({ buttonFamiliesArray }) => (
  <div className="button-view-container">
    {buttonFamiliesArray.map(buttonFamilyObject =>
      <ButtonFamily
        content={buttonFamilyObject}
      />,
    )}
  </div>
);

ButtonView.propTypes = {
  buttonFamiliesArray: React.PropTypes.any,
};

export default ButtonView;
