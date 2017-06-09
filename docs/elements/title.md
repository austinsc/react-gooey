Simple **headings** to add depth to your page

There are **2 types** of headings:

```jsx
<div>
  <Title>
    Title
    <Subtitle>
      Subtitle
    </Subtitle>
  </Title>
</div>
```

There are **6 sizes** available:

```jsx|span-3
<div>
  <Title size="1">
    Title 1
  </Title>
  <Title size="2">
    Title 2
  </Title>
  <Title size="3">
    Title 3 (default size)
  </Title>
  <Title size="4">
    Title 4
  </Title>
  <Title size="5">
    Title 5
  </Title>
  <Title size="6">
    Title 6
  </Title>
</div>
```

```jsx|span-3
<div>
  <Subtitle size="1">
    Subtitle 1
  </Subtitle>
  <Subtitle size="2">
    Subtitle 2
  </Subtitle>
  <Subtitle size="3">
    Subtitle 3 
  </Subtitle>
  <Subtitle size="4">
    Subtitle 4
  </Subtitle>
  <Subtitle size="5">
    Subtitle 5 (default size)
  </Subtitle>
  <Subtitle size="6">
    Subtitle 6
  </Subtitle>
</div>
```

When you **combine** a `<Title/>` and a `<Subtitle/>`, they move closer together.


```hint
As a rule of thumb, it is recommended to use a size difference of **two**. So if you use a `<Title size="1"/>`, combine it with a `<Subtitle size="3"/>`.
```

```jsx
<div>
  <Title size="1">
    Title 1
    <Subtitle size="3">
      Subtitle 3
    </Subtitle>
  </Title>
  <Title size="2">
    Title 2
    <Subtitle size="4">
      Subtitle 4
    </Subtitle>
  </Title>
  <Title size="3">
    Title 3
    <Subtitle size="5">
      Subtitle 5
    </Subtitle>
  </Title>
</div>
```
