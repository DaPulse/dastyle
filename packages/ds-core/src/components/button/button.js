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
  changeOnClick: PropTypes.bool
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
    if (this.props.disabled || this.props.loading || this.state.clicked) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
    
    if(this.props.changeOnClick) {
      this.contentWidthBeforeClick = this.content.offsetWidth;
      this.setState({ clicked: true }, () =>
      setTimeout(() =>
        this.setState({clicked: false}), 1500)
      )
    }
  }

  renderContent(loading, icon, changeOnClick) {
    if(loading) {
      return <div className='loader'></div>;
    }
    if (changeOnClick && this.state.clicked) {
      return <span style={{width: this.contentWidthBeforeClick}} className="fa fa-check"></span>;
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
      changeOnClick,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'ds-btn',
      (changeOnClick && this.state.clicked) ? 'ds-btn-clicked' : `ds-btn${outline ? '-outline' : ''}-${color}${loading ? '-loading' : ''}`,
      size ? `ds-btn-${size}` : false,
      block ? 'ds-btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }
    return (
      <Tag {...attributes} className={classes} ref={getRef} onClick={this.onClick}>
        <div ref={t => this.content = t}>{this.renderContent(loading, icon, changeOnClick)}</div>
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
