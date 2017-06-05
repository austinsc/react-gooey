import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';

const Nested = (cn) => function({className, children}) {
  const classes = classNames(`card-${cn}`, {
    [className]: !!className
  });
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

class Header extends Component {
  static displayName = 'Card.Header';
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
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     *
     */
    text: PropTypes.string
  };

  render() {
    const {icon, text, className, ...rest} = this.props;
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
        {text && <p className="card-header-title">
          {text}
        </p>}
        {icon && (<a className="card-header-icon">
          {iconComponent}
        </a>)}
      </header>
    );
  }
}

class Footer extends Component {
  static displayName = 'Card.Footer';
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
  static Header = Header;
  static Image = Nested('image');
  static Content = Nested('content');
  static Footer = Footer;

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

