import React, {PureComponent} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nested = (cn) => function ({className, children}) {
  const classes = classNames(`media-${cn}`, {
    [className]: !!className
  });
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export class MediaObject extends PureComponent {
  static displayName = 'MediaObject';
  static propTypes = {
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string
  };
  static Left = Nested('left');
  static Right = Nested('right');
  static Content = Nested('content');


  render() {
    const {children, className, ...rest} = this.props;
    const classes = classNames('media', {
      [className]: !!className
    });
    return (
      <div className={classes} {...rest}>{children}</div>
    );
  }
}
