import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';
import createNestedComponent from '../Nested';

class Link extends PureComponent {
  static displayName = 'Panel.Link';
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
    const classes = classNames('panel-block', {
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
      <a className={classes} {...rest}>
        {iconComponent}
        {text}
      </a>
    );
  }
}

export class Panel extends Component {
  static displayName = 'Panel';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string,
    /**
     * Size of the card component.
     */
    size: PropTypes.oneOf(['is-full-width'])
  };
  static Heading = createNestedComponent('panel-heading', 'p');
  static Block = createNestedComponent('panel-block', 'div');
  static Tabs = createNestedComponent('panel-tabs', 'p');
  static Link = Link;
 // static Checkbox = Checkbox;
  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('panel', {
      [className]: !!className
    });
    return (
      <nav className={classes} {...rest}>{children}</nav>
    );
  }
}

