import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';

export default class Tab extends PureComponent {
  static displayName = 'Tab';
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
    const {icon, text, active, children, className, ...rest} = this.props;
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
      <li className={classes}>
        <a {...rest}>
          {iconComponent}
          {text || children}
        </a>
      </li>
    );
  }
}
