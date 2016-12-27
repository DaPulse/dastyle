import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Router, Route, browserHistory} from 'react-router';
const _ = require('lodash');
import Layout from './components/layout';
import DocPage from './components/doc-page';
import items from './content';
import labels from './labels';


render(
    <Router history={browserHistory}>
      <Route path="/" component={Layout} items={items} labels={labels}>
      {_.keys(items).map(docName =>
        <Route key={docName} path={docName} component={DocPage} contentEntry={items[docName]} />
      )}
      </Route>
    </Router>
  ,document.getElementById('root')
);
