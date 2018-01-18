import React from 'react';
import PropTypes from 'prop-types';
import LeftBar from './left-bar/left-bar'
import Main from './main';
import './layout.scss';

const Layout = ({ children, route }) => (
  <div className="main-container">
    <LeftBar items={route.items} labels={route.labels} />
    <Main content={children} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  route: PropTypes.any,
};

export default Layout;
