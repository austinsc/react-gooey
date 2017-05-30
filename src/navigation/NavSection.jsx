import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class NavSection extends PureComponent {
  static displayName = 'NavSection';
  static propTypes = {
    children: PropTypes.any,
    alignment: PropTypes.oneOf(['left', 'right', 'center']),
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
