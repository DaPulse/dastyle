import React, { PropTypes } from 'react';
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
    right ? 'right-align' : false,
    !inline ? 'input-caption' : false,
    color ? `text-${color}` : false
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputCaption.propTypes = propTypes;
InputCaption.defaultProps = defaultProps;

export default InputCaption;
