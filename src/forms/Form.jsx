import React from 'react';
import PropTypes from 'prop-types';
import JsonForm from 'react-jsonschema-form';
import fields from './fields';
import widgets from './widgets';

function BulmaFieldTemplate(props) {
  const {id, classNames, label, help, required, description, errors, children} = props;
  return (
    <div className={'field ' + classNames}>
      <label className="label" htmlFor={id}>{label}{required ? '*' : null}</label>
      {description}
      <div className="control">
        {children}
      </div>
      {errors}
      <div className="help">
        {help}
      </div>
    </div>
  );
}

export default function Form(props) {
  return (
    <JsonForm widgets={widgets} fields={fields} {...props} />
  );
}