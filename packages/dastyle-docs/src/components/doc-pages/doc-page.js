import React from 'react';
import ColorDoc from './colors';
import ButtonDoc from './buttons';
import FormElementsDoc from './form-elements';
import './doc-page.scss';


const DocPage = ({ route }) => {
  const getCurrentRouteDoc = () => {
    if (route.contentEntry[0].type === 'component') {
      switch(route.contentEntry[0].ref) {
        case 'colors':
          return <ColorDoc />;
        case 'buttons':
          return <ButtonDoc />;
        case 'form-elements':
          return <FormElementsDoc />;
        default:
          return false;
      }
    }
  };

  return (
    <div className="doc-page">
      {getCurrentRouteDoc()}
    </div>
  );
};

DocPage.propTypes = {
  route: React.PropTypes.any.isRequired,
};

export default DocPage;
