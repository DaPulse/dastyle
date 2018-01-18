import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = (props) => {
  const {
    className,
    row,
    disabled,
    color,
    check,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    color ? `ds-has-${color}` : false,
    row ? 'ds-row' : false,
    check ? 'ds-form-check' : 'ds-form-group',
    check && disabled ? 'disabled' : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
