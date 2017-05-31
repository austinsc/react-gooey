import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    size: PropTypes.oneOf([
      '16x16',
      '24x24',
      '32x32',
      '48x48',
      '64x64',
      '96x96',
      '128x128'
    ]),
    /**
     * Ratio of image element to be rendered.
     */
    ratio: PropTypes.oneOf([
      'square',
      '1by1',
      '4by3',
      '3by2',
      '16by9',
      '2by1'
    ]),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {children, src, size, ratio, className, ...rest} = this.props;
    const classes = classNames('image', {
      [`is-${size}`]: !!size,
      [`is-${ratio}`]: !!ratio,
      [className]: !!className
    });
    return (
      <figure className={classes} {...rest}>
        <img src={src}/>
        {children}
      </figure>
    );
  }
}
