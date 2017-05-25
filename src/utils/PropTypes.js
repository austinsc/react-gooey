import PropTypes from 'prop-types';

export const color = PropTypes.oneOf(['danger', 'info', 'primary', 'warning', 'success', 'light', 'dark', 'purple', 'orange']);

export const column = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'one-quarter', 'one-third', 'half', 'two-thirds', 'three-quarters']);

export const title = PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']);

export const image = PropTypes.oneOf(['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128']);

export const ratio = PropTypes.oneOf(['square', '1by1', '4by3', '3by2', '16by9', '2by1']);

export const devices = PropTypes.oneOf(['mobile', 'tablet', 'desktop']);

export const instanceNamed = name => (props, propName, componentName) => {
  if(!name.test(componentName)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.');
  }
};

export const arrayOfInstancesNamed = name => (propValue, key, componentName, location, propFullName) => {
  if(!name.test(propValue[key])) {
    return new Error('Invalid prop `' + propFullName + '` supplied to `' + componentName + '`. Validation failed.');
  }
};
