import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

export default class Image extends Component {
  static displayName = 'Image';
  static propTypes = {
    /**
     * Child elements to be rendered within the image.
     */
    children: PropTypes.any,
    /**
     * Source of image element to be rendered.
     */
    src: PropTypes.string,
    /**
     * Size of image element to be rendered.
     */
    size: PropTypes.oneOfType([GooeyPropTypes.image, PropTypes.object]),
    /**
     * Ratio of image element to be rendered.
     */
    ratio: PropTypes.oneOfType([GooeyPropTypes.ratio, PropTypes.object]),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
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
