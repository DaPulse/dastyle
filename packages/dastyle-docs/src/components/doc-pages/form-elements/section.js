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

const Section = (props) => {
  const {
    className,
    ...attributes,
  } = props;

  const classes = classNames(
    className,
    'ds-section',
  );

  return (
    <div {...attributes} className={classes} />
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
