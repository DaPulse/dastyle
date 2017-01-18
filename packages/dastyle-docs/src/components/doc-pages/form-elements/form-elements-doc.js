import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';
import 'react-select/dist/react-select.css';
import contentByCategories from './content';


class FormElementsDoc extends Component {
  render() {
    return (
      <div>
        <div className="main-button-title">
          Forms Elements
        </div>
        <Tabs selectedIndex={0}>
          <TabList>
          {contentByCategories.map(category =>
            <Tab key={category.name}>{category.name}</Tab>
          )}
          </TabList>
          {contentByCategories.map(category =>
            <TabPanel key={category.name}></TabPanel>
          )}
        </Tabs>
      </div>
    );
  }
}

export default FormElementsDoc;
