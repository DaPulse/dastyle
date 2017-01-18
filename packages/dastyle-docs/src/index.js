import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import _ from 'lodash';
import DocPage from './components/doc-pages';
import items from './content';
import labels from './labels';
import Layout from './components/layout';
import './index.css';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} items={items} labels={labels}>
      {_.keys(items).map(docName =>
        <Route
          key={docName}
          path={`/${docName}`}
          component={DocPage}
          contentEntry={items[docName]}
        />,
      )}
    </Route>
  </Router>
, document.getElementById('root'),
);
