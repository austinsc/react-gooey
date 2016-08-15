import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export class Level extends Component {
  static displayName = 'Level';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  };

  render() {
    const {children, className} = this.props;
    const classes = classNames('level', {
      [className]: !!className
    });
    return (
      <nav className={classes}>{children}</nav>
    );
  }
}

export class LevelItem extends Component {
  static displayName = 'LevelItem';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  };

  render() {
    const {children, className} = this.props;
    const classes = classNames('level-item', {
      [className]: !!className
    });
    return (
      <div className={classes}>{children}</div>
    );
  }
}

export class LevelSection extends Component {
  static displayName = 'LevelSection';
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    left: PropTypes.bool,
    right: PropTypes.bool
  };

  render() {
    const {children, className, left, right} = this.props;
    const classes = classNames(className || '', {
      'level-left': left,
      'level-right': right
    });
    return (
      <div className={classes}>{children}</div>
    );
  }
}