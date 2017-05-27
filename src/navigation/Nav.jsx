import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Nav extends Component {
  static displayName = 'Nav';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    shadow: PropTypes.bool,
    hidden: PropTypes.bool
  };

  render() {
    const {children, shadow, hidden, className, ...rest} = this.props;
    const classes = classNames('nav', {
      'has-shadow': shadow,
      'is-hidden-print': hidden,
      [className]: className
    });
    return (
      <nav className={classes} {...rest}>
        {children}
      </nav>
    );
  }
}


