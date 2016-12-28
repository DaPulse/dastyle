import React from 'react';
import './main-bar.scss';

const MainBar = ({ showThis }) => {
  console.log('render side bar');
  return (
    <div className="main-bar">
      {showThis}
    </div>
  );
};

MainBar.propTypes = {
  showThis: React.PropTypes.any,
};
export default MainBar;
