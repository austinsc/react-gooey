import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createNestedComponent from '../Nested';

export default class Hero extends Component {
  static displayName = 'Hero';
  static propTypes = {
    /**
     * The color of the hero component to be rendered.
     */
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'light'
    ]).isRequired,
    /**
     * The size of the hero component to be rendered.
     */
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
      'fullheight'
    ]).isRequired,
    /**
     * Generates a subtle gradient style for the component.
     */
    bold: PropTypes.bool,
    /**
     * Child elements to be rendered within the container.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };
  static defaultProps = {
    color: 'default',
    size: 'small'
  };
  static Head = createNestedComponent('hero-head', 'div');
  static Body = createNestedComponent('hero-body', 'div');
  static Foot = createNestedComponent('hero-foot', 'div');

  render() {
    const {color, className, bold, size, children} = this.props;
    const classes = classNames('hero', {
      [`is-${color}`]: color !== 'default',
      [`is-${size}`]: size !== 'small',
      'is-bold': bold,
      [className]: !!className
    });

    return (
      <section className={classes}>
        {children}
      </section>
    );
  }
}
