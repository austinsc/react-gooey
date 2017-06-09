import _ from 'lodash';
import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Column extends Component {
  static displayName = 'Column';
  static propTypes = {
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    size: PropTypes.oneOfType([PropTypes.oneOf([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
      'one-quarter',
      'one-third',
      'half',
      'two-thirds',
      'three-quarters'
    ]), PropTypes.object]),
    offset: PropTypes.oneOfType([PropTypes.oneOf([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
      'one-quarter',
      'one-third',
      'half',
      'two-thirds',
      'three-quarters'
    ]), PropTypes.object]),
    device: PropTypes.oneOf([
      'mobile',
      'tablet',
      'desktop'
    ]),
    narrow: PropTypes.bool
  };

  render() {
    const {children, size, offset, device, narrow, className, ...rest} = this.props;
    const suffix = device ? `-${device}` : '';
    const ops = {'is-fullwidth': !!rest.fullwidth};
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
