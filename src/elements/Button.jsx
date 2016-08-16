import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Icon from './Icon';

export default class Button extends Component {
  static displayName = 'Button';
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'link',
      'light'
    ]),
    size: PropTypes.oneOf([
      'small',
      'normal',
      'medium',
      'large'
    ]),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    outlined: PropTypes.bool,
    inverted: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.any,
    icon: PropTypes.any,
    className: PropTypes.any,
    iconPosition: PropTypes.oneOf(['left', 'right'])
  };
  static defaultProps = {
    color: 'default',
    size: 'normal',
    iconPosition: 'left'
  };

  render() {
    const {color, disabled, outlined, inverted, loading, active, size, text, icon, children, className, iconPosition} = this.props;
    const classes = classNames('button', {
      [`is-${color}`]: color !== 'default',
      [`is-${size}`]: size !== 'normal',
      'is-loading': loading,
      'is-disabled': disabled,
      'is-outlined': outlined,
      'is-inverted': inverted,
      'is-active': active,
      [className]: !!className
    });
    const content = text || children ? <span>{text || children}</span> : null;
    let iconComponent = null;
    if(icon) {
      if(_.isString(icon)) {
        iconComponent = <Icon name={icon} wrap />;
      } else if(_.isObject(icon)) {
        iconComponent = <Icon {...icon} />;
      }
    }
    return (
      <a {..._.omit(this.props, _.keys(Button.propTypes))} className={classes}>
        {iconPosition === 'left' && iconComponent}
        {content}
        {iconPosition === 'right' && iconComponent}
      </a>
    );
  }
}
