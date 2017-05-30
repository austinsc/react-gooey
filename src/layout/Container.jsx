import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Container extends Component {
  static displayName = 'Container';
  static propTypes = {
    children: PropTypes.any,
    fluid: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {className, children, fluid} = this.props;
    const classes = classNames('container', {
      'is-fluid': fluid,
      [className]: !!className
    });
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
