import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';


class ModalBase extends Component {
  static displayName = 'ModalBase';
  static propTypes = {
    show: PropTypes.bool,
    backgroundClose: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any,
    className: PropTypes.any
  };
  static defaultProps = {
    backgroundClose: true,
    onClose: _.noop
  };

  render() {
    const {onClose, backgroundClose, children, className, show, ...rest} = this.props;
    if(!show) {
      return null;
    }

    const classes = classNames('modal', {
      [className]: !!className
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
    show: PropTypes.bool,
    title: PropTypes.node,
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    onClose: PropTypes.func,
    hideCloseButton: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.any
  };
  static defaultProps = {
    onClose: _.noop
  };

  render() {
    const {onClose, title, children, className, hideCloseButton, footer, show, ...rest} = this.props;
    const classes = classNames('modal-card', {
      [className]: !!className
    });

    const closeButton = hideCloseButton ? null : <button className="delete"/>;
    const foot = !footer ? null : (
      <footer className="modal-card-foot">
        {footer}
      </footer>
    );

    return (
      <ModalBase onClose={onClose} show={show}>
        <div className={classes} {...rest}>
          <header>
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
