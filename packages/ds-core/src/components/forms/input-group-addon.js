import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div'
};

const InputGroupAddon = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'ds-input-group-addon'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
