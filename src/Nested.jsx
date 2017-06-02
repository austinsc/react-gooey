import React from 'react';
import classNames from 'classnames';

export default function createNestedComponent(baseClassName, elementType = 'div', classMap = {}){
  return function({className, children, ...rest}) {
    const classMapWithProps = {};
    Object.keys(classMap).forEach(x => {
      classMapWithProps[x] = !!rest[classMap[x]];
      delete rest[classMap[x]];
    });
    const classes = classNames(baseClassName, {
      [className]: !!className,
      ...classMapWithProps
    });
    return React.createElement(elementType, ({className: classes, ...rest}), children);
  };
}
