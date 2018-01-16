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
  iconAfterClick: PropTypes.string
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
      this.contentWidthBeforeClick = this.content.offsetWidth;
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
      return <span style={{width: this.contentWidthBeforeClick}} className={iconAfterClick}></span>;
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
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'ds-btn',
      (iconAfterClick && this.state.clicked) ? 'ds-btn-clicked' : `ds-btn${outline ? '-outline' : ''}-${color}${loading ? '-loading' : ''}`,
      size ? `ds-btn-${size}` : false,
      block ? 'ds-btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }
    return (
      <Tag {...attributes} className={classes} ref={getRef} onClick={this.onClick}>
        <div ref={t => this.content = t}>{this.renderContent(loading, icon, iconAfterClick)}</div>
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
