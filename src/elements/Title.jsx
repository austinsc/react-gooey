import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

export default class Title extends Component {
  static displayName = 'Title';
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOfType([GooeyPropTypes.title, PropTypes.object]),
    subtitle: PropTypes.bool,
    className: PropTypes.any
  };

  render() {
    const {children, subtitle, size, className, ...rest}=this.props;
    const classes = classNames('title', {
      [`is-${size}`]: !!size,
      'subtitle': !!subtitle,
      [className]: !!className
    });
    return (
      <p className={classes} {...rest}>
        {children}
      </p>
    );
  }
}


