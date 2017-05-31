import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tile extends Component {
  static displayName = 'Tile';
  static propTypes = {
    ancestor: PropTypes.bool,
    parent: PropTypes.bool,
    child: PropTypes.bool,
    vertical: PropTypes.bool,
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    size: PropTypes.oneOf([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
      'one-quarter',
      'one-third',
      'half',
      'two-thirds',
      'three-quarters'
    ])
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
