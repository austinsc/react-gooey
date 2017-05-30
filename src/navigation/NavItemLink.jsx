import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {withRouter} from 'react-router';

@withRouter
export default class NavItemLink extends Component {
  static displayName = 'NavItemLink';
  static propTypes = {
    children: PropTypes.any,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    query: PropTypes.object,
    hash: PropTypes.string,
    state: PropTypes.object,
    onlyActiveOnIndex: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    target: PropTypes.string,
    tab: PropTypes.bool,
    location: PropTypes.object
  };
  static defaultProps = {
    onlyActiveOnIndex: false
  };

  render() {
    const {children, tab, className, onlyActiveOnIndex, location, to, history, staticContext, match, ...rest} = this.props;
    const classes = classNames('nav-item', {
      [className]: !!className,
      'is-active': onlyActiveOnIndex || location.pathname.indexOf(to) !== -1,
      'is-tab': tab
    });
    return (
      <Link {...rest} to={to} className={classes}>
        {children}
      </Link>
    );
  }
}
