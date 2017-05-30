import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Progress extends Component {
  static displayName = 'Progress';
  static propTypes = {
    children: PropTypes.any,
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark'
    ]),
    size: PropTypes.oneOf([
      'small',
      'normal',
      'medium',
      'large'
    ]),
    value: PropTypes.string,
    max: PropTypes.string,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 'normal',
    color: 'default'
  };

  render() {
    const {children, color, size, value, max, className, ...rest}=this.props;
    const classes = classNames('progress', {
      [`is-${color}`]: color !== 'default',
      [`is-${size}`]: size !== 'normal',
      [className]: !!className
    });
    return (
      <progress className={classes} value={value} max={max} {...rest}/>
    );
  }
}
