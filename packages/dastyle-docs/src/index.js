import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import DocPage from './components/doc-page';
import items from './content';
import labels from './labels';
import Layout from './components/layout';
import './index.css';

const _ = require('lodash');


render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} items={items} labels={labels}>
      {_.keys(items).map(docName =>
        <Route key={docName} path={docName} component={DocPage} contentEntry={items[docName]} />,
      )}
    </Route>
  </Router>
, document.getElementById('root'),
);
