import React, { Component } from 'react';
import Highlight from 'react-highlight'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ButtonLayoutComponent from './button-layout';
import StatesTextComponent from './states-text';
import './button-family.scss';
import './railscasts.css';
const _ = require('lodash');


const ButtonFamilyComponent = ({ buttonFamilyObject }) => {
  console.log('render buttons view');
  return (
    <div className="button-family-container">
      <span className="buttons-main-title">
        {buttonFamilyObject.title}
      </span>
      <br />
      <br />
      <span className="buttons-description-text">
        {buttonFamilyObject.text}
      </span>
      <br />
      <div className="button-container">
        <ButtonLayoutComponent buttonsToShow={buttonFamilyObject.buttonLayoutName} />
        <StatesTextComponent
          text={buttonFamilyObject.statesText}
        />
        <Tabs
          selectedIndex={0}
          className="tab"
        >
          <TabList>
            <Tab> CSS </Tab>
            <Tab> REACT </Tab>
          </TabList>
          <TabPanel>
            <Highlight className="HTML">
              {buttonFamilyObject.cssCode.join('\r\n')}
            </Highlight>
          </TabPanel>
          <TabPanel>
            <Highlight className="HTML">
              {buttonFamilyObject.reactCode.join('\r\n')}
            </Highlight>
          </TabPanel>
        </Tabs>
        <img
          className="screenShot"
          src={_.values(buttonFamilyObject.imgPath)[0]}
          role="presentation"
        />
      </div>
    </div>
  );
};
ButtonFamilyComponent.propTypes = {
  buttonFamilyObject: React.PropTypes.any,
};

export default ButtonFamilyComponent;
