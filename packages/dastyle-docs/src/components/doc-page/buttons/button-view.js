import React, { Component } from 'react';
import './button-view.scss';
import ButtonFamilyComponent from './button-family';

const ButtonViewComponent = ({ buttonFamiliesArray }) => {
  console.log('render button view');
  return (
    <div className="button-view-container">
      {buttonFamiliesArray.map(buttonFamilyObject =>
        <ButtonFamilyComponent
          buttonFamilyObject={buttonFamilyObject}
        />,
      )}
    </div>
  );
};
ButtonViewComponent.propTypes = {
  buttonFamiliesArray: React.PropTypes.any,
  buttonCopyMode: React.PropTypes.number.isRequired,
};

export default ButtonViewComponent;
