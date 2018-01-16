import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './button.scss';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  keepsize: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  iconAfterClick: PropTypes.string,
  loadingPaddingX: PropTypes.string
};

const defaultProps = {
  color: 'primary',
  tag: 'button',
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { disabled, loading, onClick, iconAfterClick} = this.props;
    const { clicked } = this.state;
    if (disabled || loading || clicked) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
    
    if(iconAfterClick) {
      this.widthBeforeClick = this.tag.offsetWidth;
      this.setState({ clicked: true }, () =>
      setTimeout(() =>
        this.setState({clicked: false}), 1500)
      )
    }
  }

  renderContent(loading, icon, iconAfterClick) {
    if(loading) {
      return <div className='loader'></div>;
    }
    if (iconAfterClick && this.state.clicked) {
      return <span className={iconAfterClick}></span>;
    }
    if (icon) {
      return <span><span className={`ds-i ${icon}`}></span> <span>{this.props.children}</span></span>;
    }
    return this.props.children; 
  }

  render() {
    let { 
      active,
      block,
      className,
      color,
      outline,
      size,
      loading,
      keepsize,
      tag: Tag,
      getRef,
      icon,
      iconAfterClick,
      loadingPaddingX,
      ...attributes
    } = this.props;
    const {clicked} = this.state;
    const classes = classNames(
      className,
      'ds-btn',
      (iconAfterClick && clicked) ? 'ds-btn-clicked' : `ds-btn${outline ? '-outline' : ''}-${color}${loading ? '-loading' : ''}`,
      size ? `ds-btn-${size}` : false,
      block ? 'ds-btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }
    let style = loading && loadingPaddingX ? {paddingRight:loadingPaddingX, paddingLeft:loadingPaddingX} : 
                iconAfterClick && clicked  ? {width: this.widthBeforeClick} : null
    return (
      <Tag {...attributes} className={classes} ref={t => {this.tag = t; if(getRef) {getRef(t)}}} onClick={this.onClick} {...style ? {style:style} : {}}>
        {this.renderContent(loading, icon, iconAfterClick)}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
