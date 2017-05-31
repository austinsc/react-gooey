import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Table extends Component {
  static displayName = 'Table';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * Applies the bordered style to the table component.
     */
    bordered: PropTypes.bool,
    /**
     * Applies the striped style to the table component.
     */
    striped: PropTypes.bool,
    /**
     * Makes the cells of the table component narrower.
     */
    narrow: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
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
      <table className={classes} {...rest}>{children}</table>
    );
  }
}
