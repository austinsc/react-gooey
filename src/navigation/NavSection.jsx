import classNames from 'classnames';
import React, {Component} from 'react'; import PropTypes from 'prop-types';

export default class NavSection extends Component {
  static displayName = 'NavSection';
  static propTypes = {
    children: PropTypes.any,
    alignment: PropTypes.oneOf(['left', 'right', 'center']),
    menu: PropTypes.bool,
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