import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class NavItem extends PureComponent{
  static displayName = 'NavItem';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children:PropTypes.any
  };

  render(){
    const {children}=this.props;
    return (
      <span className="nav-item">
        {children}
      </span>
    );
  }
}
