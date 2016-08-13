import React,{Component, PropTypes} from 'react';

export default class NavItem extends Component{
  static displayName = 'NavItem';
  static propTypes = {children:PropTypes.any};

  render(){
    const {children}=this.props;
    return (
      <span className="nav-item">
        {children}
      </span>
    );
  }
}