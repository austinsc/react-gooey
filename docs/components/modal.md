# Modal Components

Here is some info about the components. 

```jsx
state: {show: false}
---
<div>
  <ModalCard active={state && state.show} onClose={() => setState({show: false})} title="Sample Title" footer={[
               (<Button key="ok" onClick={() => alert('Ok Clicked!')} text="Ok" />), 
               (<Button key="cancel" onClick={() => setState({show: false})} text="Cancel" />)
             ]}>
    <p>
      Here is some content in the modal body! 
    </p>
  </ModalCard>
  <Button onClick={() => setState({show: true})}>
    Launch Modal
  </Button>
</div>
```
