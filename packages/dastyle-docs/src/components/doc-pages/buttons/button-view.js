import React from 'react';
import PropTypes from 'prop-types';
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
  buttonFamiliesArray: PropTypes.any,
};

export default ButtonView;
