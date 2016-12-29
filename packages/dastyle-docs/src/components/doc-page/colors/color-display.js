import React, {Component} from 'react';
import Clipboard from 'clipboard/dist/clipboard.min';
import './color-display.scss';
import './color-classes.scss';

class ColorDisplayComponent extends React.Component {
  // ({ colorName, colorTitle, colorText, copyOption }) => {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  componentDidMount() {
    this.doOnUpdate();
  }
  componentWillReceiveProps(prevProps) {
    this.doOnUpdate();
  }

  doOnUpdate() {
    this.colorRGB = getComputedStyle(this.myRef).getPropertyValue('background-color');
    this.colorHEX = '#' + this.colorRGB.substr(5, this.colorRGB.indexOf(')') - 5).split(',').map(color => parseInt(color, 10).toString(16)).join('');
    // let tmp = this.colorRGB.substr(5, this.colorRGB.indexOf(')') - 5).split(',')
    // debugger
    this.setState({ color: this.decideColorFormat() });
  }
  decideColorFormat() {
    switch (this.props.copyOption) {
      case 0:
        return '$' + this.props.colorName;
      case 1:
        return this.props.colorName;
      case 2: {
        return this.colorHEX;
      }
      default:
        return '';
    }
  }
  render() {
    return (
      <div
        className={`color-display-container ${this.props.colorName}`}
        onClick={e => new Clipboard(e.target, {
          text: this.decideColorFormat(e.target),
        })}
        ref={(e) => { this.myRef = e; }}
      >
        <span className="hex-title">
          {this.state.color}
        </span>
        <div className="color-display-text-container mouseOut">
          <span className="color-title">
            {this.props.colorTitle}
          </span>
          <span className="color-text">
            {this.props.colorText}
          </span>
        </div>
        <div className="color-display-text-container mouseIn">
          <span className="copy-text">
            Click to copy
          </span>

        </div>
      </div>);
  }
}

ColorDisplayComponent.propTypes = {
  colorName: React.PropTypes.string.isRequired,
  colorTitle: React.PropTypes.string.isRequired,
  colorText: React.PropTypes.string.isRequired,
  copyOption: React.PropTypes.number.isRequired,

};

export default ColorDisplayComponent;
