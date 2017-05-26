import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as GooeyPropTypes from '../utils/PropTypes';

export default class Subtitle extends Component {
  static displayName = 'Subtitle';
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOfType([GooeyPropTypes.title, PropTypes.object]),
    subtitle: PropTypes.bool,
    className: PropTypes.any
  };

  render() {
    const {children, size, className, ...rest} = this.props;
    const classes = classNames('title', {
      [`is-${size}`]: !!size,
      [className]: !!className
    });
    return (
      <p className={classes} {...rest}>
        {children}
      </p>
    );
  }
}


