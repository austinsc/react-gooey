import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {isMultiSelect, retrieveSchema, getDefaultRegistry, getUiOptions, isFilesArray, deepEquals} from '../utils';
import UnsupportedField from './UnsupportedField';

const REQUIRED_FIELD_SYMBOL = '*';
const COMPONENT_TYPES = {
  array: 'ArrayField',
  boolean: 'BooleanField',
  integer: 'NumberField',
  number: 'NumberField',
  object: 'ObjectField',
  string: 'StringField'
};

function getFieldComponent(schema, uiSchema, fields) {
  const field = uiSchema['ui:field'];
  if(typeof field === 'function') {
    return field;
  }
  if(typeof field === 'string' && field in fields) {
    return fields[field];
  }
  const componentName = COMPONENT_TYPES[schema.type];
  return componentName in fields ? fields[componentName] : UnsupportedField;
}

function Label(props) {
  const {label, required, id} = props;
  if(!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <label className="label" htmlFor={id}>
      {required ? label + REQUIRED_FIELD_SYMBOL : label}
    </label>
  );
}

function Help(props) {
  const {help} = props;
  return help
    ? <p className="help">{help}</p>
    : null;
}

function ErrorList(props) {
  const {errors = []} = props;
  if(errors.length === 0) {
    return null;
  }
  return (
    <div>
      <p />
      <ul className="error-detail bs-callout bs-callout-info">
        {errors.map((error, index) => {
          return <li className="text-danger" key={index}>{error}</li>;
        })}
      </ul>
    </div>
  );
}

export class DefaultTemplate extends Component {
  static displayName = '';
  static propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
    errors: PropTypes.element,
    rawErrors: PropTypes.arrayOf(PropTypes.string),
    help: PropTypes.element,
    rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.element,
    rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    hidden: PropTypes.bool,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    displayLabel: PropTypes.bool,
    fields: PropTypes.object,
    formContext: PropTypes.object
  };
  static defaultProps = {
    hidden: false,
    readonly: false,
    required: false,
    displayLabel: true
  };

  render() {
    const {id, classNames, label, children, errors, help, rawErrors, hidden, required, displayLabel, rawDescription} = this.props;
    if(hidden) {
      return children;
    }

    return (
      <div className={classNames}>
        {displayLabel && <Label label={label} required={required} id={id}/>}
        <div className="control">
          {children}
        </div>
        {rawErrors && rawErrors.length ? errors : <p className="help description">{rawDescription}</p>}
        {help}
      </div>
    );
  }
}

export default class SchemaField extends Component {
  static displayName = 'SchemaField';
  static propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    name: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    idSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    registry: PropTypes.shape({
      widgets: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
      ).isRequired,
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      ArrayFieldTemplate: PropTypes.func,
      FieldTemplate: PropTypes.func,
      formContext: PropTypes.object.isRequired
    })
  };
  static defaultProps = {
    uiSchema: {},
    errorSchema: {},
    idSchema: {},
    disabled: false,
    readonly: false,
    autofocus: false
  };

  shouldComponentUpdate(nextProps) {
    // if schemas are equal idSchemas will be equal as well, so it is not necessary to compare
    return !deepEquals({...this.props, idSchema: undefined}, {...nextProps, idSchema: undefined});
  }

  render() {
    const {uiSchema, errorSchema, idSchema, name, required, registry = getDefaultRegistry()} = this.props;
    const {definitions, fields, formContext, FieldTemplate = DefaultTemplate} = registry;
    const schema = retrieveSchema(this.props.schema, definitions);
    const FieldComponent = getFieldComponent(schema, uiSchema, fields);
    const {DescriptionField} = fields;
    const disabled = Boolean(this.props.disabled || uiSchema['ui:disabled']);
    const readonly = Boolean(this.props.readonly || uiSchema['ui:readonly']);
    const autofocus = Boolean(this.props.autofocus || uiSchema['ui:autofocus']);

    if(Object.keys(schema).length === 0) {
      // See #312: Ensure compatibility with old versions of React.
      return <div />;
    }

    const uiOptions = getUiOptions(uiSchema);
    let {label: displayLabel = true} = uiOptions;
    if(schema.type === 'array') {
      displayLabel = isMultiSelect(schema) || isFilesArray(schema, uiSchema);
    }
    if(schema.type === 'object') {
      displayLabel = false;
    }
    if(schema.type === 'boolean' && !uiSchema['ui:widget']) {
      displayLabel = false;
    }
    if(uiSchema['ui:field']) {
      displayLabel = false;
    }

    const {__errors, ...fieldErrorSchema} = errorSchema;

    // See #439: uiSchema: Don't pass consumed class names to child components
    const field = (
      <FieldComponent
        {...this.props}
        schema={schema}
        uiSchema={{...uiSchema, classNames: undefined}}
        disabled={disabled}
        readonly={readonly}
        autofocus={autofocus}
        errorSchema={fieldErrorSchema}
        formContext={formContext}
      />
    );

    const {type} = schema;
    const id = idSchema.$id;
    const label = this.props.schema.title || schema.title || name;
    const description = this.props.schema.description || schema.description;
    const errors = __errors;
    const help = uiSchema['ui:help'];
    const hidden = uiSchema['ui:widget'] === 'hidden';

    const classNames = cn(`field field-${type}`, {
      'field-error has-error is-danger': errors && errors.length,
      [uiSchema.classNames]: uiSchema.classNames
    });

    const fieldProps = {
      description: <DescriptionField id={id + '__description'} description={description} formContext={formContext}/>,
      rawDescription: description,
      help: <Help help={help}/>,
      rawHelp: typeof help === 'string' ? help : undefined,
      errors: <ErrorList errors={errors}/>,
      rawErrors: errors,
      id,
      label,
      hidden,
      required,
      readonly,
      displayLabel,
      classNames,
      formContext,
      fields,
      schema,
      uiSchema
    };

    return (
      <FieldTemplate {...fieldProps}>
        {field}
      </FieldTemplate>
    );
  }
}
