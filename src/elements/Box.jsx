import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Box extends Component {
  static displayName = 'Box';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.any
  };

  render() {
    const {children, className, ...rest}=this.props;
    const classes = classNames('box', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}/>
    );
  }
}
