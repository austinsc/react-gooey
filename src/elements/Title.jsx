import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

export default class Title extends Component {
  static displayName = 'Title';
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOfType([GooeyPropTypes.title, PropTypes.object]),
    subtitle: PropTypes.bool,
    spaced: PropTypes.bool,
    className: PropTypes.any
  };

  render() {
    const {children, subtitle, size, spaced, className, ...rest}=this.props;
    const classes = classNames('title', {
      [`is-${size}`]: !!size,
      'is-spaced': spaced,
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


