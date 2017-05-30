import _ from 'lodash';
import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';


class ModalBase extends Component {
  static displayName = 'ModalBase';
  static propTypes = {
    active: PropTypes.bool,
    backgroundClose: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    backgroundClose: true,
    onClose: _.noop
  };

  render() {
    const {onClose, backgroundClose, children, className, active, ...rest} = this.props;
    const classes = classNames('modal', {
      [className]: !!className,
      'is-active': active
    });

    return (
      <div className={classes} {...rest}>
        <div className="modal-background" onClick={backgroundClose ? onClose : _.noop}/>
        {children}
      </div>
    );
  }
}

export class ModalCard extends Component {
  static displayName = 'ModalCard';
  static propTypes = {
    active: PropTypes.bool,
    title: PropTypes.node,
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    onClose: PropTypes.func,
    hideCloseButton: PropTypes.bool,
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any
  };
  static defaultProps = {
    onClose: _.noop
  };

  render() {
    const {onClose, title, children, className, hideCloseButton, footer, active, ...rest} = this.props;
    const classes = classNames('modal-card', {
      [className]: !!className
    });

    const closeButton = hideCloseButton ? null : <button className="delete" onClick={onClose}/>;
    const foot = !footer ? null : (
      <footer className="modal-card-foot">
        {footer}
      </footer>
    );

    return (
      <ModalBase onClose={onClose} active={active}>
        <div className={classes} {...rest}>
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            {closeButton}
          </header>
          <section className="modal-card-body">
            {children}
          </section>
          {foot}
        </div>
      </ModalBase>
    );
  }
}
