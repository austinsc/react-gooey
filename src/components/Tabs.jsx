import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';

class Item extends PureComponent {
  static displayName = 'Tabs.Item';
  static propTypes = {
    /**
     * Child elements to be rendered within the box.
     */
    children: PropTypes.any,
    active: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {active: false};

  render() {
    const {icon, text, active, className, ...rest} = this.props;
    const classes = classNames('li', {
      'is-active': active,
      [className]: !!className
    });
    let iconComponent = null;
    if(icon) {
      if(typeof icon === 'string') {
        iconComponent = (
          <span className="panel-icon">
            <Icon name={icon} wrap={false}/>
          </span>
        );
      } else {
        iconComponent =
          <span className="panel-icon">{icon}</span>;
      }
    }
    return (
      <li className={classes} {...rest}>
        <a>
          {iconComponent}
          {text}
        </a>
      </li>
    );
  }
}

export class Tabs extends Component {
  static displayName = 'Tabs';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * Alignment of the component to be rendered.
     */
    alignment: PropTypes.oneOf(['left', 'right', 'centered']),
    /**
     * Adds classic border style to component.
     */
    boxed: PropTypes.bool,
    /**
     * Renders tabs that take up the whole width available.
     */
    fullwidth: PropTypes.bool,
    /**
     * Renders tab items mutually exlusively.
     */
    toggle: PropTypes.bool,
    /**
     * Size of the component.
     */
    size: PropTypes.oneOf([
      'normal',
      'small',
      'medium',
      'large'
    ]),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };
  static defaultProps = {
    alignment: 'left',
    size: 'normal'
  };
  static Item = Item;

  render() {
    const {children, className, boxed, toggle, fullwidth, size, alignment, ...rest} = this.props;
    const classes = classNames('tabs', {
      [`is-${alignment}`]: alignment !== 'left',
      [`is-${size}`]: size !== 'normal',
      'is-boxed': boxed,
      'is-toggle': toggle,
      'is-fullwidth': fullwidth,
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        <ul>
          {children}
        </ul>
      </div>
    );
  }
}

