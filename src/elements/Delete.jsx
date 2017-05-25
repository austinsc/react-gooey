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
    children: PropTypes.any,
    size: PropTypes.oneOf(SIZES),
    className: PropTypes.any
  };
  static defaultProps = {
    size: 'normal'
  };
  render() {
    const {size, children, className, ...rest}=this.props;
    const classes = classNames('delete', {
      [`is-${size}`]: size !== 'normal',
      [className]: !!className
    });
    return (
      <a className={classes} {...rest}/>
    );
  }
}
