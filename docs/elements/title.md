> Simple **headings** to add depth to your page

There are **2 types** of headings:

```jsx
<div>
  <Title>
    Title
  </Title>
  <Title subtitle>
    Subtitle
  </Title>
</div>
```


There are **6 sizes** available:

```jsx
<div>
  <Title size='1'>
    Title 1
  </Title>
  <Title size='2'>
    Title 2
  </Title>
   <Title size='3'>
    Title 3 (default size)
  </Title>
  <Title size='4'>
    Title 4
  </Title>
  <Title size='5'>
    Title 5
  </Title>
  <Title size='6'>
    Title 6
  </Title>
  <Title size='1' subtitle>
    Subtitle 1
  </Title>
  <Title size='2' subtitle>
    Subtitle 2
  </Title>
   <Title size='3' subtitle>
    Subtitle 3 
  </Title>
  <Title size='4' subtitle>
    Subtitle 4
  </Title>
  <Title size='5' subtitle>
    Subtitle 5 (default size)
  </Title>
  <Title size='6' subtitle>
    Subtitle 6
  </Title>
</div>
```

When you **combine** a `<Title/>` and a `<Subtitle/>`, they move closer together.

As a rule of thumb, it is recommended to use a size difference of **two**. So if you use a `<Title size='1'/>`, combine it with a `<Title size='3' subtitle/>`.

```jsx
<div>
  <Title size='1'>Title 1</Title>
  <Title size='3' subtitle>Subtitle 3</Title>
  <Title size='2'>Title 2</Title>
  <Title size='4' subtitle>Subtitle 4</Title>
  <Title size='3'>Title 3</Title>
  <Title size='5' subtitle>Subtitle 5</Title>
</div>
```
