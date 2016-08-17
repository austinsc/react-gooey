# Modal Components

Here is some info about the components. 

```jsx
state: {show: false}
---
<div>
  <Button onClick={() => setState({show: true})}>
    Launch Modal
  </Button>
  <ModalCard show={state && state.show} onClose={() => setState({show: false})} title="Sample Title">
    <p>
      Here is some content in the modal body! 
    </p>
  </ModalCard>
</div>
```
