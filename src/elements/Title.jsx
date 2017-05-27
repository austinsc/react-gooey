import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as GooeyPropTypes from '../utils/PropTypes';

export default class Title extends Component {
  static displayName = 'Title';
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOfType([GooeyPropTypes.title, PropTypes.object]),
    className: PropTypes.any
  };
  static defaultProps = {
    size: 3
  };

  render() {
    const {children, size, className, ...rest} = this.props;
    const classes = classNames('title', {
      [`is-${size}`]: !!size,
      [className]: !!className
    });
    return React.createElement(`h${size}`, {className: classes, ...rest}, children);
  }
}


