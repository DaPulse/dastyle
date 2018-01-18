import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'small',
};

const InputCaption = (props) => {
  const {
    className,
    inline,
    color,
    right,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    right ? 'ds-right-align' : false,
    !inline ? 'ds-input-caption' : false,
    color ? `ds-text-${color}` : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputCaption.propTypes = propTypes;
InputCaption.defaultProps = defaultProps;

export default InputCaption;
