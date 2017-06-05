import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    /**
     * Text to be rendered within the button.
     */
    text: PropTypes.string,
    /**
     * Color of the button.
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
    ]),
    /**
     * Size of the button.
     */
    size: PropTypes.oneOf([
      'normal',
      'small',
      'medium',
      'large'
    ]),
    /**
     * Size of icon rendered within the button.
     */
    iconSize: PropTypes.oneOf([
      'normal',
      'small',
      'medium',
      'large'
    ]),
    /**
     * Replaces the content of the button with a Loading indicator and sets button to a fixed width.
     */
    loading: PropTypes.bool,
    /**
     * Changes the style of the button to outlined.
     */
    outlined: PropTypes.bool,
    /**
     * Changes the style of the button so the text color becomes the background color, and vice-versa.
     */
    inverted: PropTypes.bool,
    /**
     * Adds a highlighted focus border around the button.
     */
    focused: PropTypes.bool,
    /**
     * Replaces the style of the button with the hovered style effect.
     */
    hovered: PropTypes.bool,
    /**
     * Replaces the style of the button with the active style effect.
     */
    active: PropTypes.bool,
    /**
     * Creates the button so it is non-interactive, useful to align a text label with an input.
     */
    'static': PropTypes.bool,
    /**
     * Child elements to be rendered within the button.
     */
    children: PropTypes.any,
    /**
     * Icon to be rendered within the button.
     */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Position of icon to be rendered within the button.
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    color: 'default',
    size: 'normal',
    iconPosition: 'left',
    inverted: false,
    'static': false
  };

  render() {
    const {color, outlined, inverted, focused, hovered, loading, active, size, text, icon, children, className, iconSize, iconPosition, ...rest} = this.props;
    const classes = classNames('button', {
      [`is-${color}`]: color !== 'default',
      [`is-${size}`]: size !== 'normal',
      'is-loading': loading,
      'is-outlined': outlined,
      'is-inverted': inverted,
      'is-focused': focused,
      'is-hovered': hovered,
      'is-active': active,
      'is-static': this.props.static,
      [className]: !!className
    });
    delete rest.static;
    const content = text || children ? <span>{text || children}</span> : null;
    let iconComponent = null;
    if(icon) {
      if(typeof icon === 'string') {
        iconComponent = <Icon name={icon} wrap wrapSize={iconSize || bulmaSizeToFontAwesomeSize(size)} />;
      } else {
        iconComponent = icon;
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
