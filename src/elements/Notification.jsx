import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {PropTypes as GooeyPropTypes} from '../utils';

export default class Notification extends Component {
  static displayName = 'Notification';
  static propTypes = {
    children: PropTypes.any,
    color: GooeyPropTypes.color
  };

  render() {
    const {children, color, ...rest}=this.props;
    const classes = classNames('notification', {
      [`is-${color}`]: !!color
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
