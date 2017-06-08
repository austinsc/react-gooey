# Delete
A versatile **delete** cross

```props
```

The **delete** element is a stand-alone element that can be used in different contexts.

 On its own, it's a simple circle with a cross:
```jsx
<div>
  <Delete/>
</div>
```

It comes in **4** sizes:

```jsx
<div>
  <Delete size="small"/>
  &nbsp;
  <Delete/>
  &nbsp;
  <Delete size="medium"/>
  &nbsp;
  <Delete size="large"/>
</div>
```

By default, the `<Delete />` component

You can use it for Gooey `Tags`, `Notifications`, and `Messages`:

```jsx
<Tag color="success">
   Hello World  
  <Delete size="small" button/>
</Tag>
```
```jsx
<Notification color="danger">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit  
  <Delete size="medium" button/>
</Notification>
```
```jsx
<Message color="info">
  <Message.Header deleteButton>Info</Message.Header>
  <Message.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. 
    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac 
    eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
    mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </Message.Body>
</Message>
```

