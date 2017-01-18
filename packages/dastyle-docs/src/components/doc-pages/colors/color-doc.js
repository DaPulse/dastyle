import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './color-doc.scss';
import ColorsViewComponent from './colors-view';
import colors from './colors-data';

const _ = require('lodash');


class ColorDoc extends Component {

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
        <div className="main-color-title">
          Colors
        </div>
        <Select
          name="form-field-name"
          value={this.state.colorCopyMode.value}
          options={[
            { value: 0, label: 'CSS Variable' },
            { value: 1, label: 'CSS Class Name' },
            { value: 2, label: 'Hex' },
            { value: 3, label: 'RGB' },
            ]}
          onChange={this.onChange.bind(this)}
          clearable={false}
          searchable={false}
        />
        <Tabs selectedIndex={0}>
          <TabList>
          {_.keys(colors).map(colorCategoty =>
            <Tab key={colorCategoty}>{colorCategoty}</Tab>
          )}
          </TabList>
          {
            _.keys(colors).map(colorCategoty =>
              <TabPanel>
                <ColorsViewComponent
                  colorFamiliesArray={colors[colorCategoty]}
                  colorCopyMode={this.state.colorCopyMode.value}
                />
              </TabPanel>
            )
          }

        </Tabs>
      </div>
    );
  }
};

export default ColorDoc;
