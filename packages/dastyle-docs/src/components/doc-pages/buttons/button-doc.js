import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';
import 'react-select/dist/react-select.css';

import Content from './content';
import ButtonView from './button-view';
import './button-doc.scss';



class ButtonDoc extends Component {
  render() {
    return (
      <div>
        <div className="main-button-title">
          Buttons
        </div>
        <Tabs
          selectedIndex={0}
        >
          <TabList>
            {
              _.keys(Content).map(tab =>
                <Tab>
                  {tab}
                </Tab>,
              )
            }
          </TabList>
          {
            _.keys(Content).map(tab =>
              <TabPanel>
                <ButtonView
                  buttonFamiliesArray={Content[tab]}
                />
              </TabPanel>,
            )
          }

        </Tabs>
      </div>
    );
  }
}

export default ButtonDoc;
