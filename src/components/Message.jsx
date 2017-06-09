import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createNestedComponent from '../Nested';
import Delete from "../elements/Delete";

class Head extends PureComponent {
  static displayName = 'Message.Head';
  static propTypes = {
    /**
     * Child elements to be rendered within the box.
     */
    children: PropTypes.any,
    /**
     * Controls whether the a delete button should be rendered on the component.
     */
    deleteButton: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {children, deleteButton, className, ...rest} = this.props;
    const classes = classNames('message-header', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        {children}
        {deleteButton && <Delete/>}
      </div>
    );
  }
}

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
  static Head = Head;
  static Body = createNestedComponent('message-body', 'div');

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
