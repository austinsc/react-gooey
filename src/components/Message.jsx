import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Message extends PureComponent {
  static displayName = 'Message';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    /**
     * Color of the message.
     */
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'link',
      'light',
      'white',
      'black'
    ])
  };
  static defaultProps = {
    color: 'default'
  };
  render() {
    const {className, color, ...rest}=this.props;
    const classes = classNames('message', {
      [`is-${color}`]: color !== 'default',
      [className]: !!className
    });
    return (
      <article className={classes} {...rest}/>
    );
  }
}
