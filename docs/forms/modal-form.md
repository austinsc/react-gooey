> A multipurpose JSON schema driven form container

```props
```
  
The interactive forms are powered by [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form). 

```code
lang: json
span: 2
---
{
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string", 
      title: "Title", 
      default: "A new task",
      description: "This is a bit of help text just for you."
    },
    done: {
      type: "boolean", 
      title: "Done?", 
      default: false
    }
  }
}
```

```jsx
span: 4
state: {show: false}
---
<div>
   <ModalForm title="Modal Title" active={state && state.show} onClose={() => setState({show: false})} footer={[
                (<Button key="save" text="Save Changes" color="success" />), 
                (<Button key="cancel" text="Cancel" />)
              ]} schema={forms.todo} uiSchema={formsui.todo}>
     <p>
       Here is some content in the modal body! 
     </p>
   </ModalForm>
   <Button onClick={() => setState({show: true})}>
     Launch Modal
   </Button>
</div>
```
