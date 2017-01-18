import React from 'react';
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
  children: React.PropTypes.any,
  route: React.PropTypes.any,
};

export default Layout;
