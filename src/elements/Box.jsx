import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Box extends Component {
  static displayName = 'Box';
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

  render() {
    const {className, ...rest}=this.props;
    const classes = classNames('box', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}/>
    );
  }
}
