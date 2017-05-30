import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Footer extends Component {
  static displayName = 'Footer';
  static propTypes = {};
  static defaultProps = {
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {className, children} = this.props;
    const classes = classNames('footer', {
      [className]: !!className
    });
    return (
      <footer className={classes}>
        {children}
      </footer>
    );
  }
}
