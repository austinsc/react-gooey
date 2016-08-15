import {PropTypes} from 'react';

export const color = PropTypes.oneOf(['danger', 'info', 'primary', 'warning', 'success', 'light', 'dark', 'purple', 'orange']);

export const column = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'one-quarter', 'one-third', 'half', 'two-thirds', 'three-quarters']);

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
