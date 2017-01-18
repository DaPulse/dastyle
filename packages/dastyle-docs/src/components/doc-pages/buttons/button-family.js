import React from 'react';
import Highlight from 'react-highlight'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Buttons from './buttons';
import StatesText from './states-text';
import './button-family.scss';
import './railscasts.css';
const _ = require('lodash');


const ButtonFamily = ({ content }) => {
  const shouldPrintStates = () => {
    if (content.statesText) {
      return <StatesText text={content.statesText} />
    }
    return false;
  }

  return (
    <div className="button-family-container">
      <span className="buttons-main-title">
        {content.title}
      </span>
      <br />
      <br />
      <span className="buttons-description-text">
        {content.text}
      </span>
      <br />
      <div className="button-container">
        <Buttons buttonsToShow={content.buttonLayoutName} />
        {shouldPrintStates()}
        <Tabs
          selectedIndex={0}
          className="tab"
        >
          <TabList>
            <Tab>React</Tab>
            <Tab>CSS</Tab>
          </TabList>
          <TabPanel>
            <Highlight className="HTML">
              {content.reactCode.join('\r\n')}
            </Highlight>
          </TabPanel>
          <TabPanel>
            <Highlight className="HTML">
              {content.cssCode.join('\r\n')}
            </Highlight>
          </TabPanel>
        </Tabs>
        <img
          className="screenShot"
          src={_.values(content.imgPath)[0]}
          role="presentation"
        />
      </div>
    </div>
  );
};
ButtonFamily.propTypes = {
  content: React.PropTypes.any,
};

export default ButtonFamily;
