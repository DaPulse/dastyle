import React from 'react';
import LeftBar from './left-bar';
import MainBar from './main-bar';
import './layout.scss';

const Layout = ({ children, route }) => {
  console.log('render layout');
  console.log(route.items);
  return (
    <div className="main-container">
      <LeftBar items={route.items} labels={route.labels} />
      <MainBar showThis={children} />
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.any,
  route: React.PropTypes.any,
};
export default Layout;
