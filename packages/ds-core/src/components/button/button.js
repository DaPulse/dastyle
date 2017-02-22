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
};

const defaultProps = {
  color: 'primary',
  tag: 'button',
};

class Button extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.loading) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
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
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'ds-btn',
      `ds-btn${outline ? '-outline' : ''}-${color}${loading ? '-loading' : ''}`,
      size ? `ds-btn-${size}` : false,
      block ? 'ds-btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }
    return (
      <Tag {...attributes} className={classes} ref={getRef} onClick={this.onClick}>
      {loading ?
        <div className='loader'></div>
      :
        icon ? <span><span className={`ds-i ${icon}`}></span> <span>{this.props.children}</span></span> : this.props.children
      }
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
