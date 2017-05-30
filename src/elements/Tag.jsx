import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tag extends Component {
  static displayName = 'Tag';
  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'black',
      'white',
      'light'
    ]),
    size: PropTypes.oneOf([
      'small',
      'normal',
      'medium',
      'large'
    ]),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 'normal',
    color: 'default'
  };

  render() {
    const {children, color, text, size, className, ...rest}=this.props;
    const classes = classNames('tag', {
      [`is-${color}`]: color !== 'default',
      [`is-${size}`]: size !== 'normal',
      [className]: !!className
    });
    const content = text || children ? <span>{text || children}</span> : null;
    return (
      <span className={classes} {...rest}>
        {content}
      </span>
    );
  }
}
