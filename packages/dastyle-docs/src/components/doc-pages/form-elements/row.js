import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './section.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
};

const Row = (props) => {
  const {
    className,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    'ds-row',
  );

  return (
    <div {...attributes} className={classes} />
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
