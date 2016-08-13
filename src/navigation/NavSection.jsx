import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

export default class NavSection extends Component {
  static displayName = 'NavSection';
  static propTypes = {
    children: PropTypes.any,
    alignment: PropTypes.oneOf(['left', 'right', 'center']),
    menu: PropTypes.bool
  };
  static defaultProps = {
    alignment: 'left',
    menu: false
  };

  render() {
    const {children, alignment, menu} = this.props;
    const classes = classNames({
      [`nav-${alignment}`]: alignment,
      'nav-menu': menu
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}