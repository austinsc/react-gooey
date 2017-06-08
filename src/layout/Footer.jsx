import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Footer extends PureComponent {
  static displayName = 'Footer';
  static propTypes = {
    /**
     * Child elements to be rendered within the footer.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };

  render() {
    const {className, children, ...rest} = this.props;
    const classes = classNames('footer', {
      [className]: !!className
    });
    return (
      <footer {...rest} className={classes}>
        {children}
      </footer>
    );
  }
}
