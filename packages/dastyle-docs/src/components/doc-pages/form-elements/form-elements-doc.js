import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';
import 'react-select/dist/react-select.css';
import Content from './content';


class FormElementsDoc extends Component {
  render() {
    return (
      <div>
        <div className="main-button-title">
          Forms Elements
        </div>
        <Tabs selectedIndex={0}>
          <TabList>
            {
              _.keys(Content).map(tab =>
                <Tab keys>
                  {tab}
                </Tab>,
              )
            }
          </TabList>
          {
            _.keys(Content).map(tab =>
              <TabPanel>

              </TabPanel>,
            )
          }

        </Tabs>
      </div>
    );
  }
}

export default FormElementsDoc;
