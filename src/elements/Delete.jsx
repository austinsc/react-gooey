import React, {Component, createElement} from 'react'; import PropTypes from 'prop-types';
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
     * Changes the size of the delete element to be rendered.
     */
    size: PropTypes.oneOf(SIZES),
    /**
     * Controls whether the component is rendered as a button.
     */
    button: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    size: 'normal',
    button: false
  };
  render() {
    const {size, button, className, ...rest}=this.props;
    const classes = classNames('delete', {
      [`is-${size}`]: size !== 'normal',
      [className]: !!className
    });
    return createElement( button ? 'button' : 'a',
      {className: classes, ...rest}
    );
  }
}
