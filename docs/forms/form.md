# Forms
A multipurpose JSON schema driven form container

```props
```
  
The interactive forms are powered by [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form). 

```js
// schema
{
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string", 
      title: "Title", 
      default: "A new task"
    },
    done: {
      type: "boolean", 
      title: "Done?", 
      default: false
    }
  }
}

// uiSchema
{
  title: {
    'ui:placeholder': "A new task"
  }
}
```

```jsx
<Form schema={forms.todo} uiSchema={ui.todo} />
```
