import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Section extends Component {
  static displayName = 'Section';
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
    const classes = classNames('section', {
      [className]: !!className
    });
    return (
      <section className={classes}>
        {children}
      </section>
    );
  }
}
