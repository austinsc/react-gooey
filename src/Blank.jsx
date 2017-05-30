import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Blank extends PureComponent {
  static displayName = 'Blank';
  static propTypes = {
    /**
     * Child elements to be rendered within the box.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {};

  render() {
    const {className, ...rest}=this.props;
    const classes = classNames('blank', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}/>
    );
  }
}
