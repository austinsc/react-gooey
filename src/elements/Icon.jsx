import _ from 'lodash';
import React, {Component} from 'react'; import PropTypes from 'prop-types';
import classNames from 'classnames';
import Style from 'react-style-decorator';


//@Style(require('font-awesome/scss/font-awesome'), require('font-awesome-animation/dist/font-awesome-animation.css'))
export default class Icon extends Component {
  static displayName = 'Icon';
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'normal']),
    rotate: PropTypes.oneOf(['90', '180', '270']),
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    fixedWidth: PropTypes.bool,
    spin: PropTypes.bool,
    stack: PropTypes.oneOf(['1x', '2x', '3x']),
    wrap: PropTypes.bool,
    inverse: PropTypes.bool,
    className: PropTypes.any,
    wrench: PropTypes.bool,
    ring: PropTypes.bool,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    flash: PropTypes.bool,
    bounce: PropTypes.bool,
    float: PropTypes.bool,
    pulse: PropTypes.bool,
    shake: PropTypes.bool,
    tada: PropTypes.bool,
    passing: PropTypes.bool,
    burst: PropTypes.bool,
    fast: PropTypes.bool,
    slow: PropTypes.bool,
    hover: PropTypes.bool,
    skip: PropTypes.bool
  };
  static defaultProps = {
    wrap: true,
    size: 'normal'
  };

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps);
  }

  render() {
    const {wrap, name, size, rotate, flip, spin, fixedWidth, stack, inverse, className, wrench, ring, horizontal, vertical, flash, bounce, float, pulse, skip, shake, tada, passing, burst, fast, slow, hover, ...rest}=this.props;
    const faa = (wrench || ring || horizontal || vertical || flash || bounce || float || pulse || shake || tada || passing || burst);
    const css = classNames(className, `fa fa-${name}`, {
      [`is-${size}`]: size !== 'normal',
      [`fa-rotate-${rotate}`]: rotate,
      [`fa-flip-${flip}`]: flip,
      [`fa-stack-${stack}`]: stack,
      'fa-fw': fixedWidth,
      'fa-spin': spin,
      'fa-inverse': inverse,
      'fa-pulse': skip,
      'faa-wrench': wrench,
      'faa-ring': ring,
      'faa-horizontal': horizontal,
      'faa-vertical': vertical,
      'faa-flash': flash,
      'faa-bounce': bounce,
      'faa-float': float,
      'faa-pulse': pulse,
      'faa-shake': shake,
      'faa-tada': tada,
      'faa-passing': passing,
      'faa-burst': burst,
      'faa-fast': fast,
      'faa-slow': slow,
      'animated': !hover && faa,
      'animated-hover': hover && faa
    });

    return wrap ? (
      <span className="icon" {...rest}>
        <i className={css}/>
      </span>
    ) : <i className={css} {...rest}/>;
  }
}
