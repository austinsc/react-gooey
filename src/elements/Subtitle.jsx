import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Subtitle extends Component {
  static displayName = 'Subtitle';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * If true, apply the heading class to the title
     */
    heading: PropTypes.bool,
    /**
     * Size of the component to be rendered.
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 5
  };

  render() {
    const {children, heading, size, className, ...rest} = this.props;
    const classes = classNames('subtitle', {
      [`is-${size}`]: !!size,
      'heading': heading,
      [className]: !!className
    });
    return React.createElement(`h${size}`, {className: classes, ...rest}, children);
  }
}


