import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createNestedComponent from '../Nested';

export class Level extends Component {
  static displayName = 'Level';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };
  static Left = createNestedComponent('level-left');
  static Right = createNestedComponent('level-right');
  static Item = createNestedComponent('level-item');

  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('level', {
      [className]: !!className
    });
    return (
      <nav className={classes} {...rest}>{children}</nav>
    );
  }
}
