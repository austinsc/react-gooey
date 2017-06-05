import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Container extends Component {
  static displayName = 'Container';
  static propTypes = {
    /**
     * Child elements to be rendered within the container.
     */
    children: PropTypes.any,
    /**
     * Renders the container with a 20px margin on the left and right sides without a maximum width.
     */
    fluid: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {className, children, fluid, ...rest} = this.props;
    const classes = classNames('container', {
      'is-fluid': fluid,
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
