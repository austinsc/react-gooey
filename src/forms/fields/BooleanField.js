import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getWidget, getUiOptions, optionsList, getDefaultRegistry} from '../utils';

export default class BooleanField extends Component {
  static displayName = 'BooleanField';
  static propTypes = {
    schema: PropTypes.object.isRequired,
    name: PropTypes.string,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    registry: PropTypes.shape({
      widgets: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
      ).isRequired,
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      formContext: PropTypes.object.isRequired
    })
  };
  static defaultProps = {
    uiSchema: {},
    disabled: false,
    readonly: false,
    autofocus: false
  };

  render() {
    const {schema, name, uiSchema, idSchema, formData, registry = getDefaultRegistry(), required, disabled, readonly, autofocus, onChange} = this.props;
    const {title} = schema;
    const {widgets, formContext} = registry;
    const {widget = 'checkbox', ...options} = getUiOptions(uiSchema);
    const Widget = getWidget(schema, widget, widgets);
    const enumOptions = optionsList({
      enum: [true, false],
      enumNames: schema.enumNames || ['yes', 'no']
    });
    return (
      <Widget
        options={{...options, enumOptions}}
        schema={schema}
        id={idSchema && idSchema.$id}
        onChange={onChange}
        label={title === undefined ? name : title}
        value={formData}
        required={required}
        disabled={disabled}
        readonly={readonly}
        registry={registry}
        formContext={formContext}
        autofocus={autofocus}
      />
    );
  }
}