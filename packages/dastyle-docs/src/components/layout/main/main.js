import React from 'react';
import './main.scss';

const MainBar = ({ content }) => (
  <div className="main-content">
    {content}
  </div>
);

MainBar.propTypes = {
  content: React.PropTypes.any,
};
export default MainBar;
