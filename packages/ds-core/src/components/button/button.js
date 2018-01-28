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
  paddingX: PropTypes.string,
  successIcon: PropTypes.string,
  successText: PropTypes.string,
  successMode: PropTypes.bool
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
    const { disabled, loading, onClick, successMode} = this.props;
    if (disabled || loading || successMode) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  renderContentWithIcon(text, icon) {
    return <span><span className={`ds-i ${icon}`}></span> <span>{text}</span></span>;
  }

  renderContent() {
    const {loading, icon, children, successIcon, successText, successMode} = this.props;
    if(loading) {
      return <div className='loader'></div>;
    }
    if (successMode) {
      return this.renderContentWithIcon(successText, successIcon);
    }
    if (icon) {
      return this.renderContentWithIcon(children, icon);
    }
    return children; 
  }

  render() {
    let { active, block, className, color, outline, size, loading, keepsize, tag: Tag, getRef, icon,
      successMode, paddingX, ...attributes } = this.props;
    
    const classes = classNames(
      className,
      'ds-btn',
      successMode ? 'ds-btn-success-mode' : `ds-btn${outline ? '-outline' : ''}-${color}${loading ? '-loading' : ''}`,
      size ? `ds-btn-${size}` : false,
      block ? 'ds-btn-block' : false,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    const style = paddingX ? {paddingRight:paddingX, paddingLeft:paddingX} : null

    let tagProps = {...attributes, className: classes, onClick: this.onClick};
    if (style != null) {
      tagProps.style = style
    }

    return (
      <Tag {...tagProps} ref={getRef}>
        {this.renderContent()}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
