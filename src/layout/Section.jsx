import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Section extends Component {
  static displayName = 'Section';
  static propTypes = {
    /**
     * Size of the section.
     */
    size: PropTypes.oneOf([
      'normal',
      'small',
      'medium',
      'large'
    ]),
    /**
     * Child elements to be rendered within the section.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 'normal'
  };

  render() {
    const {className, children, size} = this.props;
    const classes = classNames('section', {
      [`is-${size}`]: size !== 'normal',
      [className]: !!className
    });
    return (
      <section className={classes}>
        {children}
      </section>
    );
  }
}
