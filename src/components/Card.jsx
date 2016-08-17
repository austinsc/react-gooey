import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export class Card extends Component {
  static displayName = 'Card';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf(['is-full-width'])
  };

  render() {
    const {children, className} = this.props;
    const classes = classNames('card', {
      [className]: !!className
    });
    return (
      <nav className={classes}>{children}</nav>
    );
  }
}

