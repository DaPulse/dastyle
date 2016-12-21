import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Router, Route, Index, Link, IndexRoute, browserHistory} from 'react-router';
const _ = require('lodash');
import Layout from './components/layout';
import DocPage from './components/doc-page';
import items from './content';

render(
    <Router history={browserHistory}>
      <Route path="/" component={Layout} items={items}>
      {_.keys(items).map(docName =>
        <Route key={docName} path={docName} component={DocPage} contentEntry={items[docName]} />
      )}
      </Route>
    </Router>
  ,document.getElementById('root')
);