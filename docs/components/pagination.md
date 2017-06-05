> A responsive, usable, and flexible **pagination**

```props
```

The pagination component consists of several elements:
* `<Pagination.Previous/>` and `<Pagination.Next/>` for incremental navigation
* `<Pagination.List/>` which displays page items:
  * `<Pagination.Link/>` for the page numbers
  * `<Pagination.Ellipsis/>` for range separators

All elements are optional so you can compose your pagination as you wish.

```jsx
<Pagination>
  <Pagination.Previous>
    Previous
  </Pagination.Previous>
  <Pagination.Next>
    Next Page
  </Pagination.Next>
  <Pagination.List>
    <Pagination.Link>1</Pagination.Link>
    <Pagination.Ellipsis/>
    <Pagination.Link>45</Pagination.Link>
    <Pagination.Link current>46</Pagination.Link>
    <Pagination.Link>47</Pagination.Link>
    <Pagination.Ellipsis/>
    <Pagination.Link>86</Pagination.Link>
  </Pagination.List>
</Pagination>
```

You can disable some links if they are not active, or change the amount of page numbers available.
```jsx
<Pagination>
  <Pagination.Previous title="This is the first page" disabled>
    Previous
  </Pagination.Previous>
  <Pagination.Next>
    Next Page
  </Pagination.Next>
  <Pagination.List>
    <Pagination.Link current>1</Pagination.Link>
    <Pagination.Link>2</Pagination.Link>
    <Pagination.Link>3</Pagination.Link>
  </Pagination.List>
</Pagination>
```

By default, the list is located on the left, and the previous/next buttons on the right. But you can change the **order** of these elements by using the `centered` and `right` modifiers.
```jsx
<Pagination listPosition="centered">
  <Pagination.Previous>
    Previous
  </Pagination.Previous>
  <Pagination.Next>
    Next Page
  </Pagination.Next>
    <Pagination.List>
      <Pagination.Link>1</Pagination.Link>
      <Pagination.Ellipsis/>
      <Pagination.Link>45</Pagination.Link>
      <Pagination.Link current>46</Pagination.Link>
      <Pagination.Link>47</Pagination.Link>
      <Pagination.Ellipsis/>
      <Pagination.Link>86</Pagination.Link>
    </Pagination.List>
</Pagination>
```

```jsx
<Pagination listPosition="right">
  <Pagination.Previous>
    Previous
  </Pagination.Previous>
  <Pagination.Next>
    Next Page
  </Pagination.Next>
    <Pagination.List>
      <Pagination.Link>1</Pagination.Link>
      <Pagination.Ellipsis/>
      <Pagination.Link>45</Pagination.Link>
      <Pagination.Link current>46</Pagination.Link>
      <Pagination.Link>47</Pagination.Link>
      <Pagination.Ellipsis/>
      <Pagination.Link>86</Pagination.Link>
    </Pagination.List>
</Pagination>
```

## Sizes
The pagination comes in **3 additional sizes**.
```jsx
<div>
  <Pagination size="small">
    <Pagination.Previous>
      Previous
    </Pagination.Previous>
    <Pagination.Next>
      Next Page
    </Pagination.Next>
      <Pagination.List>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Ellipsis/>
        <Pagination.Link>45</Pagination.Link>
        <Pagination.Link current>46</Pagination.Link>
        <Pagination.Link>47</Pagination.Link>
        <Pagination.Ellipsis/>
        <Pagination.Link>86</Pagination.Link>
      </Pagination.List>
  </Pagination>
  <Pagination size="medium">
    <Pagination.Previous>
      Previous
    </Pagination.Previous>
    <Pagination.Next>
      Next Page
    </Pagination.Next>
      <Pagination.List>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Ellipsis/>
        <Pagination.Link>45</Pagination.Link>
        <Pagination.Link current>46</Pagination.Link>
        <Pagination.Link>47</Pagination.Link>
        <Pagination.Ellipsis/>
        <Pagination.Link>86</Pagination.Link>
      </Pagination.List>
  </Pagination>
  <Pagination size="large">
    <Pagination.Previous>
      Previous
    </Pagination.Previous>
    <Pagination.Next>
      Next Page
    </Pagination.Next>
      <Pagination.List>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Ellipsis/>
        <Pagination.Link>45</Pagination.Link>
        <Pagination.Link current>46</Pagination.Link>
        <Pagination.Link>47</Pagination.Link>
        <Pagination.Ellipsis/>
        <Pagination.Link>86</Pagination.Link>
      </Pagination.List>
  </Pagination>
</div>
```
