import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDOMServer from 'react-dom/server';
import Highlight from 'react-highlight'
import Section from './section';
import Row from './row';
import Col from './col';
import * as Examples from './examples';

/* eslint import/no-webpack-loader-syntax: 0 */
import rowjs from 'raw-loader!./row.js';
console.log(rowjs);
const propTypes = {
  children: PropTypes.node,
  categorySections: PropTypes.any,
  className: PropTypes.string,
};

const defaultProps = {
};

const CategoryView = (props) => {
  const {
    categorySections,
    className,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
  );

  const Example = ({exampleRef}) => Examples[exampleRef]()

  return (
    <div {...attributes} className={classes}>
      {categorySections.map((section, index) =>
        <Section key={index}>
          <h2>{section.title}</h2>
          <h3>{section.subTitle}</h3>
          <Row>
            {section.examples.map(example =>
              <Col>
                <Example key={example.ref} exampleRef={example.ref} />
              </Col>
            )}
          </Row>
          <Tabs>
            <TabList>
              <Tab>
                CSS
              </Tab>
              <Tab>
                React
              </Tab>
            </TabList>
            <TabPanel>
              <Highlight language="xml">
                {ReactDOMServer.renderToStaticMarkup(Examples[section.examples[0].ref]())}
              </Highlight>
            </TabPanel>
            <TabPanel>
              <Highlight>
                const React = Code;
              </Highlight>
            </TabPanel>
          </Tabs>
        </Section>
      )}
    </div>
  );
};

CategoryView.propTypes = propTypes;
CategoryView.defaultProps = defaultProps;

export default CategoryView;
