import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Progress extends Component {
  static displayName = 'Progress';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * Color of the progress component.
     */
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark'
    ]),
    /**
     * Size of the progress component.
     */
    size: PropTypes.oneOf([
      'small',
      'normal',
      'medium',
      'large'
    ]),
    /**
     * Specified value of the progress component.
     */
    value: PropTypes.any,
    /**
     * Maximum value of the progress component.
     */
    max: PropTypes.any,
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
