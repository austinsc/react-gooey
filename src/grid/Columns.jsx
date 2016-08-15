import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {PropTypes as GooeyPropTypes} from '../utils';

export class Columns extends Component {
  static displayName = 'Columns';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
    mobile: PropTypes.bool,
    desktop: PropTypes.bool,
    multiline: PropTypes.bool,
    gapless: PropTypes.bool
  };

  render() {
    const {children, mobile, desktop, multiline, gapless, className, ...rest} = this.props;
    const classes = classNames('columns', {
      [className]: !!className,
      'is-mobile': mobile,
      'is-desktop': desktop,
      'is-multiline': multiline,
      'is-gapless': gapless
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}

export class Column extends Component {
  static displayName = 'Column';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
    size: PropTypes.oneOf([GooeyPropTypes.column, PropTypes.object]),
    offset: GooeyPropTypes.column,
    device: GooeyPropTypes.devices,
    narrow: PropTypes.bool
  };

  render() {
    const {children, size, offset, device, narrow, className, ...rest} = this.props;
    const suffix = device ? `-${device}` : '';
    let map = {
      [className]: !!className,
      [`is-offset-${offset}`]: offset,
      'is-narrow': narrow
    };
    if(_.isObject(size)) {
      _(size)
        .filter((v, k) => k === 'mobile' || k === 'tablet' || k === 'desktop')
        .map((v, k) => `is-${v}-${k}`)
        .forEach(x => map[x] = true);
    } else {
      map[`is-${size}${suffix}`] = size;
    }
    const classes = classNames('column', map);
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
