import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createNestedComponent from '../Nested';
import {default as NavToggle} from './NavToggle';

export default class Nav extends PureComponent {
  static displayName = 'Nav';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string,
    /**
     * Modifier to add shadow to nav component.
     */
    shadow: PropTypes.bool,
    /**
     * Hides the nav component.
     */
    hidden: PropTypes.bool
  };

  static Link = createNestedComponent('nav-item', 'a', {'is-tab': 'tab', 'is-active': 'active'});
  static Item = createNestedComponent('nav-item', 'div', {'is-tab': 'tab', 'is-active': 'active'});
  static Left = createNestedComponent('nav-left', 'span', {'nav-menu': 'menu'});
  static Center = createNestedComponent('nav-center', 'span', {'nav-menu': 'menu'});
  static Right = createNestedComponent('nav-right', 'span', {'nav-menu': 'menu'});
  static Toggle = NavToggle;

  render() {
    const {children, shadow, hidden, className, ...rest} = this.props;
    const classes = classNames('nav', {
      'has-shadow': shadow,
      'is-hidden-print': hidden,
      [className]: className
    });
    return (
      <nav className={classes} {...rest}>
        {children}
      </nav>
    );
  }
}


