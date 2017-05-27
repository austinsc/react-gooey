import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {asNumber} from '../utils';

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue({type, items}, value) {
  if(value === '') {
    return undefined;
  } else if(
    type === 'array' &&
    items &&
    ['number', 'integer'].includes(items.type)
  ) {
    return value.map(asNumber);
  } else if(type === 'boolean') {
    return value === 'true';
  } else if(type === 'number') {
    return asNumber(value);
  }
  return value;
}

function getValue(event, multiple) {
  if(multiple) {
    return [].slice
      .call(event.target.options)
      .filter(o => o.selected)
      .map(o => o.value);
  } else {
    return event.target.value;
  }
}

export default class SelectWidget extends Component {
  static displayName = 'SelectWidget';
  static propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };
  static defaultProps = {
    autofocus: false,
  };

  render() {
    const {schema, id, options, value, required, disabled, readonly, multiple, autofocus, onChange, onBlur, placeholder} = this.props;
    const {enumOptions} = options;
    const emptyValue = multiple ? [] : '';
    return (
      <span className="select is-fullwidth">
        <select id={id}
                multiple={multiple}
                value={typeof value === 'undefined' ? emptyValue : value}
                required={required}
                disabled={disabled || readonly}
                autoFocus={autofocus}
                onBlur={onBlur && (x => onBlur(id, processValue(schema, getValue(x, multiple))))}
                onChange={event => onChange(processValue(schema, getValue(event, multiple)))}>
          {!multiple && !schema.default && <option value="">{placeholder}</option>}
          {enumOptions.map(({value, label}, i) => <option key={i} value={value}>{label}</option>)}
        </select>
      </span>
    );
  }
}