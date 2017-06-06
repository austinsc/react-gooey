> A versatile **delete** cross

```props
```

>The **delete** element is a stand-alone element that can be used in different contexts.

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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit  
  <Delete size="medium" button/>
</Message>
```

