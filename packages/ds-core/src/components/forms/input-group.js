import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './input-group.scss';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div'
};

const InputGroup = (props) => {
  const {
    className,
    tag: Tag,
    size,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
