import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Content extends Component {
  static displayName = 'Content';
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf(['normal', 'medium', 'large'])
  };
  static defaultProps = {
    size: 'normal'
  };

  render() {
    const {children, size, ...rest}=this.props;
    const classes = classNames('content', {
      'is-medium': size === 'medium',
      'is-large': size === 'large'
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
