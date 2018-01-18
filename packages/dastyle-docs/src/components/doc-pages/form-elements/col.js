import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './section.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
};

const Col = (props) => {
  const {
    className,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    'ds-col',
  );

  return (
    <div {...attributes} className={classes} />
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
