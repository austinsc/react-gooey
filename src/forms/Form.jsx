import React, {Component} from 'react';
import PropTypes from 'prop-types';
import JsonForm from 'react-jsonschema-form';
import fields from './fields';
import widgets from './widgets';

export default class Form extends Component {
  static displayName = 'Form';
  static propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    formData: PropTypes.any,
    widgets: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ),
    fields: PropTypes.objectOf(PropTypes.func),
    ArrayFieldTemplate: PropTypes.func,
    FieldTemplate: PropTypes.func,
    ErrorList: PropTypes.func,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    showErrorList: PropTypes.bool,
    onSubmit: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    method: PropTypes.string,
    target: PropTypes.string,
    action: PropTypes.string,
    autocomplete: PropTypes.string,
    enctype: PropTypes.string,
    acceptcharset: PropTypes.string,
    noValidate: PropTypes.bool,
    noHtml5Validate: PropTypes.bool,
    liveValidate: PropTypes.bool,
    validate: PropTypes.func,
    transformErrors: PropTypes.func,
    safeRenderCompletion: PropTypes.bool,
    formContext: PropTypes.object
  };
  static defaultProps = {
    widgets,
    fields
  };

  render() {
    return (
      <JsonForm className="form" {...this.props} />
    );
  }
}
