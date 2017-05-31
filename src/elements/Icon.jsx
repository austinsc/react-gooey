import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import 'font-awesome/scss/font-awesome';
// import 'font-awesome-animation/dist/font-awesome-animation.css';

const sizes = ['lg', '2x', '3x', '4x', '5x'];

export default class Icon extends PureComponent {
  static displayName = 'Icon';
  static propTypes = {
    /**
     * Font Awesome name of the icon to be rendered.
     */
    name: PropTypes.string.isRequired,
    /**
     * Size of the icon element to be rendered.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'normal']),
    /**
     * Orientation of the icon element to be rendered.
     */
    rotate: PropTypes.oneOf(['90', '180', '270']),
    /**
     * Applies flip effect to icon element to be rendered.
     */
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * Renders the icon element with a fixed width.
     */
    fixedWidth: PropTypes.bool,
    /**
     * Applies spin effect to icon element to be rendered.
     */
    spin: PropTypes.bool,
    /**
     * Renders icon elements stacked.
     */
    stack: PropTypes.oneOf(['1x', '2x', '3x']),
    /**
     * Specifies that the flexible icon element will wrap if necessary (default: true).
     */
    wrap: PropTypes.bool,
    /**
     * Specifies size of the wrapping of the flexible icon element.
     */
    wrapSize: PropTypes.oneOf(['small', 'medium', 'large', 'normal']),
    /**
     * Applies inverse color to the icon element to be rendered.
     */
    inverse: PropTypes.bool,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    /**
     * Applies wrench animation effect to icon element.
     */
    wrench: PropTypes.bool,
    /**
     * Applies ring animation effect to icon element.
     */
    ring: PropTypes.bool,
    /**
     * Applies horizontal animation effect to icon element.
     */
    horizontal: PropTypes.bool,
    /**
     * Applies vertical animation effect to icon element.
     */
    vertical: PropTypes.bool,
    /**
     * Applies flash animation effect to icon element.
     */
    flash: PropTypes.bool,
    /**
     * Applies bounce animation effect to icon element.
     */
    bounce: PropTypes.bool,
    /**
     * Applies float animation effect to icon element.
     */
    float: PropTypes.bool,
    /**
     * Applies pulse animation effect to icon element.
     */
    pulse: PropTypes.bool,
    /**
     * Applies shake animation effect to icon element.
     */
    shake: PropTypes.bool,
    /**
     * Applies tada animation effect to icon element.
     */
    tada: PropTypes.bool,
    /**
     * Applies passing animation effect to icon element.
     */
    passing: PropTypes.bool,
    /**
     * Applies burst animation effect to icon element.
     */
    burst: PropTypes.bool,
    /**
     * Applies fast animation effect to icon element.
     */
    fast: PropTypes.bool,
    /**
     * Applies slow animation effect to icon element.
     */
    slow: PropTypes.bool,
    /**
     * Applies hover animation effect to icon element.
     */
    hover: PropTypes.bool,
    /**
     * Applies skip animation effect to icon element.
     */
    skip: PropTypes.bool
  };
  static defaultProps = {
    wrap: true,
    wrapSize: 'normal'
  };

  render() {
    const {wrap, wrapSize, name, size, rotate, flip, spin, fixedWidth, stack, inverse, className, wrench, ring, horizontal, vertical, flash, bounce, float, pulse, skip, shake, tada, passing, burst, fast, slow, hover, ...rest}=this.props;
    const faa = (wrench || ring || horizontal || vertical || flash || bounce || float || pulse || shake || tada || passing || burst);
    const css = classNames(className, `fa fa-${name}`, {
      [`fa-${size}`]: size,
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
    const wrapClass = classNames('icon', {[`is-${wrapSize}`]: wrapSize});

    return wrap ? (
      <span className={wrapClass}>
        <i className={css} {...rest}/>
      </span>
    ) : <i className={css} {...rest}/>;
  }
}
