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
    this.clicked = false;
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { disabled, loading, onClick, iconAfterClick} = this.props;
    if (disabled || loading || this.clicked) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
    if(iconAfterClick) {
      this.widthBeforeClick = this.tagRef.offsetWidth;
      this.clicked = true;
      setTimeout(() =>
        {
          this.clicked = false;
          if (this.isComponentMounted) {
            this.forceUpdate();
          }
        }, 1500)
      this.forceUpdate()
    }
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  renderContent() {
    const {loading, icon, iconAfterClick, children} = this.props;
    if(loading) {
      return <div className='loader'></div>;
    }
    if (iconAfterClick && this.clicked) {
      return <span className={iconAfterClick}></span>;
    }
    if (icon) {
      return <span><span className={`ds-i ${icon}`}></span> <span>{children}</span></span>;
    }
    return children; 
  }

  render() {
    let { active, block, className, color, outline, size, loading, keepsize, tag: Tag, getRef, icon,
      iconAfterClick, loadingPaddingX, ...attributes } = this.props;

    const afterClickMode = iconAfterClick && this.clicked;
    
    const classes = classNames(
      className,
      'ds-btn',
      afterClickMode ? 'ds-btn-clicked' : `ds-btn${outline ? '-outline' : ''}-${color}${loading ? '-loading' : ''}`,
      size ? `ds-btn-${size}` : false,
      block ? 'ds-btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    const style = loading && loadingPaddingX ? {paddingRight:loadingPaddingX, paddingLeft:loadingPaddingX} : 
                  afterClickMode  ? {width: this.widthBeforeClick} : null

    let tagProps = {...attributes, className: classes, onClick: this.onClick};
    tagProps.ref = t => {this.tagRef = t; if(getRef) {getRef(t)}};
    if (style != null) {
      tagProps.style = style
    }

    return (
      <Tag {...tagProps}>
        {this.renderContent()}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
