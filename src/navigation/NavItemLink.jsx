import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

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
    target: PropTypes.string
  };
  static defaultProps = {
    onlyActiveOnIndex: false
  };

  render() {
    const {children}=this.props;
    return (
      <Link {...this.props} className={`nav-item ${this.props.className}`} activeClassName="is-active">
        {children}
      </Link>
    );
  }
}