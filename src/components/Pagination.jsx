import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../elements/Icon';
import createNestedComponent, {createNestedListComponent} from '../Nested';

  export class Pagination extends Component {
  static displayName = 'Pagination';
  static propTypes = {
    /**
     * Child elements to be rendered within the component.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.string,
    /**
     * Size of the card component.
     */
    size: PropTypes.oneOf([
      'normal',
      'small',
      'medium',
      'large'
    ]),
    /**
     * Position of icon to be rendered within the button.
     */
    listPosition: PropTypes.oneOf(['left', 'right', 'centered'])
  };
    static defaultProps = {
      size: 'normal',
      listPosition: 'left'
    };
  static Previous = createNestedComponent('pagination-previous', 'a');
  static Next = createNestedComponent('pagination-next', 'a');
  static List = createNestedComponent('pagination-list', 'ul');
  static Link = createNestedListComponent('pagination-link', 'a', {'is-current': 'current'});
  static Ellipsis = ({...rest}) => <li><span className="pagination-ellipsis" {...rest}>&hellip;</span></li>;


    render() {
    const {children, className, size, listPosition, ...rest} = this.props;
    const classes = classNames('pagination', {
      [`is-${size}`]: size !== 'normal',
      [`is-${listPosition}`]: listPosition !== 'left',
      [className]: !!className
    });
    return (
      <nav className={classes} {...rest}>{children}</nav>
    );
  }
}

