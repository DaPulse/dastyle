import React, { Component } from 'react';
import Clipboard from 'clipboard/dist/clipboard.min';
import './color-display.scss';
import './color-classes.scss';

class ColorDisplayComponent extends Component {
  // ({ colorName, colorTitle, colorText, copyOption }) => {
  constructor(props) {
    super(props);
    this.textToCopy = '';
    this.colorText = [0, 0, 0];
    // this.decideColorFormat(props.copyOption);
  }
  componentDidMount() {
    new Clipboard(this.myRef, { text: () => this.textToCopy });
    this.decideColorFormat();
    this.forceUpdate();
  }
  decideColorFormat() {
    if (this.myRef) {
      this.colorRGB = getComputedStyle(this.myRef).getPropertyValue('background-color');
      const rgbArray = this.colorRGB.substr(4, this.colorRGB.indexOf(')') - 5).split(',');
      this.textColor = Math.round(
        ((parseInt(rgbArray[0], 10) * 299) +
          (parseInt(rgbArray[1], 10) * 587) +
          (parseInt(rgbArray[2], 10) * 114)) / 1000) > 180 ?
          'black' : 'white';
      switch (this.props.copyOption) {
        case 0:
          this.textToCopy = '$' + this.props.colorName;
          break;
        case 1:
          this.textToCopy = this.props.colorName;
          break;
        case 2:
          this.textToCopy = '#' + rgbArray.map(color => parseInt(color, 10).toString(16)).join('');
          break;
        case 3:
          this.textToCopy = this.colorRGB;
          break;
        default:
      }
    }
    return this.textToCopy;
  }
  render() {
    return (
      <div
        className={`color-display-container btn ${this.props.colorName}`}
        onClick={e => new Clipboard(e.target, { text: this.copyOnClick })}
        ref={(e) => { this.myRef = e; }}
        style={{ color: this.textColor }}
      >
        <span className="hex-title">
          {this.decideColorFormat()}
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
