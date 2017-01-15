import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-select/dist/react-select.css';
import Content from './content';
import ButtonViewComponent from './button-view';
import './button-doc.scss';

const _ = require('lodash');


class ButtonDocComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { colorCopyMode: { value: 0 } };
  }
  onChange(val) {
    this.setState({ colorCopyMode: val });
  }
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
                <ButtonViewComponent
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

export default ButtonDocComponent;
