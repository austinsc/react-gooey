import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

const SIZES = [
  'normal',
  'small',
  'medium',
  'large'
];

export default class Delete extends Component {
  static displayName = 'Delete';
  static propTypes = {
    /**
     * Changes the size of the delete element rendered.
     */
    size: PropTypes.oneOf(SIZES),
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 'normal'
  };
  render() {
    const {size, className, ...rest}=this.props;
    const classes = classNames('delete', {
      [`is-${size}`]: size !== 'normal',
      [className]: !!className
    });
    return (
      <a className={classes} {...rest}/>
    );
  }
}
