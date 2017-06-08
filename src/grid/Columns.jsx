import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Columns extends Component {
  static displayName = 'Columns';
  static propTypes = {
    /**
     * Child elements to be rendered within the columns.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    mobile: PropTypes.bool,
    desktop: PropTypes.bool,
    multiline: PropTypes.bool,
    gapless: PropTypes.bool
  };

  render() {
    const {children, mobile, desktop, multiline, gapless, className, ...rest} = this.props;
    const classes = classNames('columns', {
      [className]: !!className,
      'is-mobile': mobile,
      'is-desktop': desktop,
      'is-multiline': multiline,
      'is-gapless': gapless
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
