import React, {Component, Children} from 'react';
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
     * If true, apply the heading class to the title
     */
    heading: PropTypes.bool,
    /**
     * If true, render the element as a <p> tag
     */
    nested: PropTypes.bool,
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
    const {children, heading, nested, size, className, ...rest} = this.props;
    const classes = classNames('title', {
      [`is-${size}`]: !!size,
      'heading': heading,
      [className]: !!className
    });
    return React.createElement(nested ? 'p' : `h${size}`, {className: classes, ...rest}, Children.map(children, x => {
      if(x && x.type && x.type.displayName === 'Subtitle') {
        return {...x, props: {nested: true, ...x.props}};
      }
      return x;
    }));
  }
}


