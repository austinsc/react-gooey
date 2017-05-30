import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';

const Nested = (cn) => function ({className, children}) {
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
  static displayName = 'Header';
  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
  };
  render() {
    const {icon, text} = this.props;
    return (
      <header className="card-header">
        {text && <p className="card-header-title">
          {text}
        </p>}
        {icon && (<a className="card-header-icon">
        <Icon name={icon}/>
        </a>)}
      </header>
    );
  }
}

class Footer extends Component {
  static displayName = 'Header';
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    const {children} = this.props;
    const content = children && children.map(x => <div className="card-footer-item">{x}</div>);
    return (
      <div className="card-footer">
        {content}
      </div>
    );
  }
}
  export class Card extends Component {
  static displayName = 'Card';
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

