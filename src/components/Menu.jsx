import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export class Label extends PureComponent {
  static displayName = 'Label';
  static propTypes = {
    /**
     * The display text to be rendered in the menu label
     */
    text: PropTypes.string,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {className, text, ...rest}=this.props;
    const classes = classNames('menu-label', {
      [className]: !!className
    });
    return (
      <p {...rest} className={classes}>
        {text}
      </p>
    );
  }
}

export class List extends PureComponent {
  static displayName = 'List';
  static propTypes = {
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {className, ...rest}=this.props;
    const classes = classNames('menu-list', {
      [className]: !!className
    });
    return (
      <ul {...rest} className={classes} />
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
