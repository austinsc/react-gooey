> A multipurpose JSON schema driven form container
  
The interactive forms are powered by [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form). 
  
```jsx
<Form schema={{
                title: "Todo",
                type: "object",
                required: ["title"],
                properties: {
                  title: {type: "string", title: "Title", default: "A new task"},
                  done: {type: "boolean", title: "Done?", default: false}
                }
              }} />
```
