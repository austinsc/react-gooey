import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

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
