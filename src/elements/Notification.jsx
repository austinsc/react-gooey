import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

export default class Notification extends Component {
  static displayName = 'Notification';
  static propTypes = {
    /**
     * Child elements to be rendered within the notification.
     */
    children: PropTypes.any,
    /**
     * Color of the notification.
     */
    color: GooeyPropTypes.color,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {children, color, className, ...rest}=this.props;
    const classes = classNames('notification', {
      [`is-${color}`]: !!color,
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
