import _ from 'lodash';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalCard from '../components/Modal';
import Form from "./Form";
import fields from './fields';
import widgets from './widgets';


export default class ModalForm extends PureComponent {
  static displayName = 'ModalForm';
  static propTypes = {
    /**
     * Child elements to be rendered within the box.
     */
    children: PropTypes.any,
    /**
     * CSS classes to be rendered on the root element of this component.
     */
    className: PropTypes.any,
    /**
     * Sets the modal state of visibility.
     */
    active: PropTypes.bool,
    /**
     * The title of the modal
     */
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * Footer element for the component to be rendered.
     */
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    /**
     * Function specifying the behavior when the modal component is closed.
     */
    onClose: PropTypes.func,
    /**
     * Specifies whether to hide the close button on the modal component.
     */
    hideCloseButton: PropTypes.bool,
    /**
     * Color of the modal header.
     */
    color: PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'link',
      'light',
      'white',
      'black'
    ]),
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
    onClose: _.noop,
    widgets,
    fields: _.merge({}, fields, {TitleField: () => null})
  };

  render() {
    const {className, schema, hideCloseButton, color, footer, active, onClose, ...rest}=this.props;
    const classes = classNames('modal-form', {
      [className]: !!className
    });
    return (
      <ModalCard className={classes} title={schema.title} hideCloseButton={hideCloseButton} footer={footer} active={active} color={color} onClose={onClose}>
        <Form schema={schema} {...rest}>
          <span />
        </Form>
      </ModalCard>
    );
  }
}
