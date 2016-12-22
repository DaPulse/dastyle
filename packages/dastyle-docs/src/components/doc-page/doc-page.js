import React, { Component } from 'react';
import './doc-page.css'
// import { Button } from '../../../../ds-core/build/static/js/main'

export default class DocPage extends Component {
  render () {
    console.log('render doc-page');
    return (
      <div>
        this will render {this.props.route.contentEntry[0].content}
        {/* <Button>button</Button> */}
      </div>
    );
  }
}
