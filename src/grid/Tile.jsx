import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GooeyPropTypes} from '../utils';

export default class Tile extends Component {
  static displayName = 'Tile';
  static propTypes = {
    ancestor: PropTypes.bool,
    parent: PropTypes.bool,
    child: PropTypes.bool,
    vertical: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.any,
    size: GooeyPropTypes.column
  };

  render() {
    const {ancestor, parent, child, vertical, children, className, size, ...rest} = this.props;
    const classes = classNames('tile', {
      'is-ancestor': ancestor,
      'is-parent': parent,
      'is-child': child,
      'is-vertical': vertical,
      [className]: !!className,
      [`is-${size}`]: !!size
    });
    return (
      <div className={classes} {...rest}>{children}</div>
    );
  }
}
