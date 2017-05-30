import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Level extends Component {
  static displayName = 'Level';
  static propTypes = {
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };

  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('level', {
      [className]: !!className
    });
    return (
      <nav className={classes} {...rest}>{children}</nav>
    );
  }
}

export class LevelItem extends Component {
  static displayName = 'LevelItem';
  static propTypes = {
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };

  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('level-item', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>{children}</div>
    );
  }
}

export class LevelSection extends Component {
  static displayName = 'LevelSection';
  static propTypes = {
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string,
    left: PropTypes.bool,
    right: PropTypes.bool
  };

  render() {
    const {children, className, left, right, ...rest} = this.props;
    const classes = classNames(className || '', {
      'level-left': left,
      'level-right': right
    });
    return (
      <div className={classes} {...rest}>{children}</div>
    );
  }
}
