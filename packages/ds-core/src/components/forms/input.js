import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './forms.scss';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  static: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'p',
  type: 'text',
};

//TODO consider refactoring to a pure function

class Input extends React.Component {
  render() {
    const {
      className,
      type,
      size,
      state,
      tag,
      addon,
      static: staticInput,
      getRef,
      ...attributes,
    } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let Tag = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'ds-form-control';

    if (staticInput) {
      formControlClass = `ds-${formControlClass}-static`;
      Tag = tag;
    } else if (fileInput) {
      formControlClass = `ds-${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'ds-form-check-input';
      }
    }

    const classes = classNames(
      className,
      state ? `ds-form-control-${state}` : false,
      size ? `ds-form-control-${size}` : false,
      formControlClass
    )

    if (Tag === 'input') {
      attributes.type = type;
    }

    return (
      <Tag {...attributes} ref={getRef} className={classes} />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
