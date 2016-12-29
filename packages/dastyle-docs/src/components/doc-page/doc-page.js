import React from 'react';
import './doc-page.css';
import ColorDisplayComponent from './colors/color-display';
// import { Button } from '../../../../ds-core/build/static/js/main'

const DocPage = ({ route }) => {
  console.log('render doc-page');
  return (
    <div>
      {/* this will render {route.contentEntry[0].content} */}
      <ColorDisplayComponent
        colorName="acid-green"
        colorTitle="Title Here"
        colorText="Hext Here"
        copyOption={2}
      />
    </div>
  );
};
DocPage.propTypes = {
  route: React.PropTypes.any.isRequired,
};

export default DocPage;
