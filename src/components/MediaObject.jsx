import React, {PureComponent} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import createNestedComponent from '../Nested';


export class MediaObject extends PureComponent {
  static displayName = 'MediaObject';
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
  static Left = createNestedComponent('media-left');
  static Right = createNestedComponent('media-right');
  static Content = createNestedComponent('media-content');

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
