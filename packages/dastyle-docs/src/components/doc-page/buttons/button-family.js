import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './button-family.scss';
import StatesTextComponent from './states-text';
import CodeViewerComponent from './code-viewer';

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
        {
          React.createElement(buttonFamilyObject.buttonComponentName, {})
        }
        <StatesTextComponent
          text={buttonFamilyObject.statesText}
        />
        <Tabs
          selectedIndex={0}
        >
          <TabList>
            <Tab> CSS </Tab>
            <Tab> REACT </Tab>
          </TabList>
          <TabPanel>
            <CodeViewerComponent
              text={buttonFamilyObject.classNamesArray}
              type="css"
            />
          </TabPanel>
          <TabPanel>
            <CodeViewerComponent
              text={buttonFamilyObject.classNamesArray}
              type="react"
            />
          </TabPanel>
        </Tabs>
        <img
          className="screenShot"
          src={buttonFamilyObject.imgPath}
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
