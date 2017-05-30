import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Content extends Component {
  static displayName = 'Content';
  static propTypes = {
    /**
     * Child elements to be rendered within the content.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    /**
     * Changes the size of the content rendered.
     */
    size: PropTypes.oneOf(['normal', 'medium', 'large'])
  };
  static defaultProps = {
    size: 'normal'
  };

  render() {
    const {children, className, size, ...rest}=this.props;
    const classes = classNames('content', {
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
