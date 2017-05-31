import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Title extends Component {
  static displayName = 'Title';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * Size of the title component.
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 3
  };

  render() {
    const {children, size, className, ...rest} = this.props;
    const classes = classNames('title', {
      [`is-${size}`]: !!size,
      [className]: !!className
    });
    return React.createElement(`h${size}`, {className: classes, ...rest}, children);
  }
}

