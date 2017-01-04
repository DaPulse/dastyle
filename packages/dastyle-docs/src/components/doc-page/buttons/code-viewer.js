import React, { Component } from 'react';
import './states-text.scss';

const CodeViewerComponent = ({ classNamesArray, propsDictionary , type }) => {
  console.log('render buttons view');
  const decideB = () => {
    return (type === 'css') ? 'b' : 'B'
  };
  const decideHowToWriteClass = () => {
    return (type === 'css') ? 'class=' : 'className='
  };
  return (
    <div className="code-container">
      {
        classNamesArray.map(line =>
          <span className="regularText">
            { `<${decideB()}utton` }
            <span className="class">
              {decideHowToWriteClass()}
            </span>
            <span className="className">
              {'"' + line + '"'}
            </span>
            { `>..</${decideB()}utton>` }
            <br />
          </span>
        )
      }
    </div>
  );
};
CodeViewerComponent.propTypes = {
  classNamesArray: React.PropTypes.any,
  propsDictionary: React.PropTypes.any,
  type: React.PropTypes.string.isRequired,
};

export default CodeViewerComponent;
