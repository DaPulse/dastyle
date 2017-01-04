import React from 'react';
import ColorDocComponent from './colors/color-doc';
import ButtonLayoutComponent from './buttons/button-layout';
import './doc-page.css';


const DocPage = ({ route }) => {
  const printBy = () => {
    if (route.contentEntry[0].type === 'component') {
      if (/color-doc/i.test(route.contentEntry[0].ref)) {
        return <ColorDocComponent />;
      }
      if (/button-layout/i.test(route.contentEntry[0].ref)) {
        return <ButtonLayoutComponent />;
      }
    }
    return false;
  };
  console.log('render doc-page');
  // let tmp = ColorsViewComponent;
  // debugger;
  return (
    <div className="doc-page">
      {printBy()}
    </div>
  );
};
// this will render {route.contentEntry[0].content}

DocPage.propTypes = {
  route: React.PropTypes.any.isRequired,
};

export default DocPage;
