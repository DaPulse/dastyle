import React from 'react';
import './doc-page.css';
// import { Button } from '../../../../ds-core/build/static/js/main'

const DocPage = ({ route }) => {
  console.log('render doc-page');
  return (
    <div>
      this will render {route.contentEntry[0].content}
      {/* <Button>button</Button> */}
    </div>
  );
};
DocPage.propTypes = {
  route: React.PropTypes.any.isRequired,
};

export default DocPage;
