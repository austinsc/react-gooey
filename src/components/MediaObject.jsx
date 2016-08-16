import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export class MediaObject extends Component {
  static displayName = 'MediaObject';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    left: PropTypes.bool,
    right: PropTypes.bool,
    content: PropTypes.bool
  };

  render() {
    const {children, className, left, right, content, ...rest} = this.props;
    const classes = classNames({
      'media': !left && !right && !content,
      'media-left': !!left,
      'media-right': !!right,
      'media-content': !!content,
      [className]: !!className
    });
    const contents = content || children ? <div>{children}</div> : null;
    return left || right || content ? (
      <div className={classes} {...rest}>{contents}</div>)
      : (<article className={classes} {...rest}>{contents}</article>
    );
  }
}
