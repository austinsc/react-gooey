import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createNestedComponent from '../Nested';

class Link extends PureComponent {
  static displayName = 'Menu.Link';
  static propTypes = {
    /**
     * Changes the style of the link to active.
     */
    active: PropTypes.bool,
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };

  render() {
    const {text, active, children, className, ...rest} = this.props;
    const classes = classNames('', {
      'is-active': active,
      [className]: !!className
    });
    return (
      <li>
        <a className={classes}{...rest}>{text || children}</a>
      </li>
    );
  }
}

/**
 * A simple menu for any type of vertical navigation. Mark <a> tags with the is-active className to render them as the active menu item.
 */
export default class Menu extends PureComponent {
  static displayName = 'Menu';
  static propTypes = {
    /**
     * Child elements to be rendered within the box.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {};

  static Label = createNestedComponent('menu-label', 'p');
  static List = createNestedComponent('menu-label', 'ul');
  static Link = Link;

  render() {
    const {className, ...rest}=this.props;
    const classes = classNames('menu', {
      [className]: !!className
    });
    return (
      <aside className={classes} {...rest}/>
    );
  }
}
