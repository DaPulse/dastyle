import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

const MainBar = ({ content }) => (
  <div className="main-content">
    {content}
  </div>
);

MainBar.propTypes = {
  content: PropTypes.any,
};
export default MainBar;
