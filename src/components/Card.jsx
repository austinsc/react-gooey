import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Card extends Component {
  static displayName = 'Card';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf(['is-full-width'])
  };

  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('card', {
      [className]: !!className
    });
    return (
      <nav className={classes} {...rest}>{children}</nav>
    );
  }
}

