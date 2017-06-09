import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';
import createNestedComponent from '../Nested';

class Head extends Component {
  static displayName = 'Card.Head';
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
     *
     */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  render() {
    const {icon, children, className, ...rest} = this.props;
    const classes = classNames('card-header', {
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
      <header className={classes} {...rest}>
        {children && <p className="card-header-title">
          {children}
        </p>}
        {icon && (<a className="card-header-icon">
          {iconComponent}
        </a>)}
      </header>
    );
  }
}

class Foot extends Component {
  static displayName = 'Card.Foot';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };

  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('card-footer', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        {Children.map(children, (x, i) => <div key={i} className="card-footer-item">{x}</div>)}
      </div>
    );
  }
}

export default class Card extends Component {
  static displayName = 'Card';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };
  static Head = Head;
  static Image = createNestedComponent('card-image');
  static Content = createNestedComponent('card-content');
  static Foot = Foot;

  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('card', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>{children}</div>
    );
  }
}

