import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Table extends Component {
  static displayName = 'Table';
  static propTypes = {
    children: PropTypes.any,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    narrow: PropTypes.bool,
    className: PropTypes.any
  };


  render() {
    const {children, bordered, striped, narrow, className, ...rest}=this.props;
    const classes = classNames('table', {
      'is-bordered': bordered,
      'is-striped': striped,
      'is-narrow': narrow,
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>{children}</div>
    );
  }
}
