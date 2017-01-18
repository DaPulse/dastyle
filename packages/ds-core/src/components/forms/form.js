import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './forms.scss'

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'form',
};

const Form = props => {
  const {
    className,
    inline,
    tag: Tag,
    getRef,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    inline ? 'ds-form-inline' : false
  );

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
