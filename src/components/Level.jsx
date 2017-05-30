import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nested = (cn) => function ({className, children}) {
  const classes = classNames(`level-${cn}`, {
    [className]: !!className
  });
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export class Level extends Component {
  static displayName = 'Level';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };
  static Left = Nested('left');
  static Right = Nested('right');
  static Item = Nested('item');

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
