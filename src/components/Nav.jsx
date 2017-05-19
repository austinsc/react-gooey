import React, {Component} from 'react'; import PropTypes from 'prop-types';
import {Link} from 'react-router';
import classNames from 'classnames';

export class Nav extends Component {
  static displayName = 'Nav';
  static propTypes = {
    children: PropTypes.any,
    shadow: PropTypes.bool
  };

  render() {
    const {children, shadow} = this.props;
    const classes = classNames('nav', {
      'has-shadow': shadow
    });
    return (
      <nav className={classes}>
        {children}
      </nav>
    );
  }
}

export class NavSection extends Component {
  static displayName = 'NavSection';
  static propTypes = {
    children: PropTypes.any,
    alignment: PropTypes.oneOf(['left', 'right', 'center']),
    menu: PropTypes.bool
  };
  static defaultProps = {
    alignment: 'left',
    menu: false
  };

  render() {
    const {children, alignment, menu} = this.props;
    const classes = classNames({
      [`nav-${alignment}`]: alignment,
      'nav-menu': menu
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export class NavItem extends Component {
  static displayName = 'NavItem';
  static propTypes = {children: PropTypes.any};

  render() {
    const {children} = this.props;
    return (
      <span className="nav-item">
        {children}
      </span>
    );
  }
}

export class NavToggle extends Component {
  static displayName = 'NavToggle';
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <span className="nav-toggle">
        <span/>
        <span/>
        <span/>
      </span>
    );
  }
}

export class NavItemLink extends Component {
  static displayName = 'NavItemLink';
  static propTypes = {
    children: PropTypes.any,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    query: PropTypes.object,
    hash: PropTypes.string,
    state: PropTypes.object,
    onlyActiveOnIndex: PropTypes.bool,
    onClick: PropTypes.func,
    target: PropTypes.string
  };
  static defaultProps = {
    onlyActiveOnIndex: false
  };

  render() {
    const {children} = this.props;
    return (
      <Link {...this.props} className={`nav-item ${this.props.className}`} activeClassName="is-active">
        {children}
      </Link>
    );
  }
}
