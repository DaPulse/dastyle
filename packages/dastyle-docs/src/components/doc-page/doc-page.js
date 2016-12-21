import React, { Component } from 'react';
import './doc-page.css'

export default class DocPage extends Component {
  render () {
    console.log('render doc-page');
    return (
      <div>
        this will render {this.props.route.contentEntry[0].content}
      </div>
    );
  }
}
