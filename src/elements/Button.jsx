import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as GooeyPropTypes from '../utils/PropTypes'
import classNames from 'classnames';
import Icon from './Icon';

const SIZES = [
  'normal',
  'small',
  'medium',
  'large'
];

function bulmaSizeToFontAwesomeSize(bulmaSize) {
  return SIZES[SIZES.indexOf(bulmaSize) - 1] || 'normal';
}

export default class Button extends Component {
  static displayName = 'Button';
  static propTypes = {
    text: PropTypes.string,
    color: GooeyPropTypes.buttonColor,
    size: PropTypes.oneOf(SIZES),
    loading: PropTypes.bool,
    outlined: PropTypes.bool,
    inverted: PropTypes.bool,
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.any,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.any,
    iconPosition: PropTypes.oneOf(['left', 'right'])
  };
  static defaultProps = {
    color: 'default',
    size: 'normal',
    iconPosition: 'left',
    inverted: false
  };

  render() {
    const {color, outlined, inverted, focused, hovered, loading, active, size, text, icon, children, className, iconPosition, ...rest} = this.props;
    const classes = classNames('button', {
      [`is-${color}`]: color !== 'default',
      [`is-${size}`]: size !== 'normal',
      'is-loading': loading,
      'is-outlined': outlined,
      'is-inverted': inverted,
      'is-focused': focused,
      'is-hovered': hovered,
      'is-active': active,
      [className]: !!className
    });
    const content = text || children ? <span>{text || children}</span> : null;
    let iconComponent = null;
    if(icon) {
      if(typeof icon === 'string') {
        iconComponent = <Icon name={icon} wrap wrapSize={bulmaSizeToFontAwesomeSize(size)} />;
      } else {
        iconComponent = <Icon {...icon} />;
      }
    }

    return (
      <a className={classes} {...rest}>
        {iconPosition === 'left' && iconComponent}
        {content}
        {iconPosition === 'right' && iconComponent}
      </a>
    );
  }
}
