import React from 'react';
import './button-layout.scss';
import { Button } from '../../../../../ds-core/build/static/js/main';

const ButtonLayoutComponent = ({ buttonsToShow }) => {
  console.log('render buttons view');
  return (
    <div className="ds-container">
      <div className="ds-row">
        <div className="ds-col">
          <div className="ds-table-element">
            <Button color="primary" size="lg">Active</Button>
          </div>
        </div>
        <div className="ds-col">
          <div className="ds-table-element">
            <Button color="primary">Active</Button>
          </div>
        </div>
        <div className="ds-col">
          <div className="ds-table-element">
            <Button color="primary" size="sm">Active</Button>
          </div>
        </div>
      </div>
      <div className="ds-row">
        <div className="ds-col">
          <div className="ds-table-element">
            <Button color="primary" size="lg" disabled>Disabled</Button>
          </div>
        </div>
        <div className="ds-col">
          <div className="ds-table-element">
            <Button color="primary" disabled>Disabled</Button>
          </div>
        </div>
        <div className="ds-col">
          <div className="ds-table-element">
            <Button color="primary" size="sm" disabled>Disabled</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
ButtonLayoutComponent.propTypes = {
  buttonsToShow: React.PropTypes.string.any,
};

export default ButtonLayoutComponent;
