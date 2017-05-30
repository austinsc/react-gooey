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
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 5
  };

  render() {
    const {children, size, className, ...rest} = this.props;
    const classes = classNames('subtitle', {
      [`is-${size}`]: !!size,
      [className]: !!className
    });
    return React.createElement(`h${size}`, {className: classes, ...rest}, children);
  }
}


