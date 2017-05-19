import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Hero extends Component {
  static displayName = 'Hero';
  static propTypes = {
    title: PropTypes.any,
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'light'
    ]).isRequired,
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
      'fullheight'
    ]).isRequired,
    align: PropTypes.oneOf([
      'center',
      'left',
      'right'
    ]),
    bold: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    contain: PropTypes.bool
  };
  static defaultProps = {
    color: 'default',
    size: 'small',
    align: 'center'
  };

  render() {
    const {color, className, bold, align, size, children} = this.props;
    const classes = classNames('hero', {
      [`is-${color}`]: color !== 'default',
      [`is-${align}`]: align !== 'center',
      [`is-${size}`]: size !== 'small',
      'is-bold': bold,
      [className]: !!className
    });

    return (
      <section className={classes}>
        {children}
      </section>
    );
  }
}
