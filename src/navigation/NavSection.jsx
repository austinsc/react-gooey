import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class NavSection extends PureComponent {
  static displayName = 'NavSection';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * Alignment of the component to be rendered.
     */
    alignment: PropTypes.oneOf(['left', 'right', 'center']),
    /**
     * Renders a menu that is collapsable on mobile.
     */
    menu: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    alignment: 'left',
    menu: false
  };

  render() {
    const {children, alignment, menu, className} = this.props;
    const classes = classNames({
      [`nav-${alignment}`]: alignment,
      'nav-menu': menu,
      [className]: !!className
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
