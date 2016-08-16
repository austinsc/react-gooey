import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

export default class Image extends Component {
  static displayName = 'Image';
  static propTypes = {
    children: PropTypes.any,
    src: PropTypes.string,
    size: PropTypes.oneOfType([GooeyPropTypes.image, PropTypes.object]),
    ratio: PropTypes.oneOfType([GooeyPropTypes.ratio, PropTypes.object]),
    className: PropTypes.any
  };

  render() {
    const {children, src, size, ratio, className, ...rest}=this.props;
    const classes = classNames('image', {
      [`is-${size}`]: !!size,
      [`is-${ratio}`]: !!ratio,
      [className]: !!className
    });
    return (
      <figure className={classes} {...rest}>
        <img src={src} />
        {children}
      </figure>
    );
  }
}
