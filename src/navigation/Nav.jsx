import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {default as NavSection} from './NavSection';
import {default as NavItem} from './NavItem';
import createNestedComponent from '../Nested';

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

  static Item = NavItem;
  static Left = createNestedComponent('nav-left', 'span', {'nav-menu': 'menu'});
  static Center = createNestedComponent('nav-center', 'span', {'nav-menu': 'menu'});
  static Right = createNestedComponent('nav-right', 'span', {'nav-menu': 'menu'});

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


