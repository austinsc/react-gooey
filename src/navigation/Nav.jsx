import React,{Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Nav extends Component{
  static displayName = 'Nav';
  static propTypes = {children:PropTypes.any, shadow:PropTypes.bool};

  render(){
    const {children, shadow}=this.props;
    const classes=classNames('nav', {
      'has-shadow': shadow
    });
    return (
      <nav className={classes}>
        {children}
      </nav>
    );
  }
}


