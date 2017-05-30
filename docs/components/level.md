# Level Components
A multi-purpose **horizontal level**, which can contain almost any other element.

`<Level/>`: main container
  * `<Level.Left/>` for left section
  * `<Level.Right/>` for right section
      * `<Level.Item/>` for each individual element

In a `<Level.Item/>`, you can then insert almost anything you want: 
a title, a button, a text input, or just simple text. 
No matter what elements you put inside a `<Level/>`, they will always be **vertically centered**.




```jsx
<Level>
  <Level.Left>
    <Level.Item>
      <Title size="5" subtitle><strong>123</strong> posts</Title>
    </Level.Item>
    <Level.Item>
      Item Two
    </Level.Item>
    <Level.Item>
      Item Three
    </Level.Item>
  </Level.Left>
  
  <Level.Right>
    <Level.Item>
      <p><strong>All</strong></p>
    </Level.Item>
    <Level.Item>
      <p><a>Published</a></p>
    </Level.Item>
    <Level.Item>
      <p><a>Drafts</a></p>
    </Level.Item>
    <Level.Item>
      <p><a>Deleted</a></p>
    </Level.Item>
    <Level.Item>
      <Button text="New" color="success"/>
    </Level.Item>
  </Level.Right>
</Level>
```

## Centered Level
If you want a **centered** level, you can use as many `<Level.Item/>` as you want, as long as they are direct children of the `<Level/>` container.

```jsx
<Level>
  <Level.Item>
    <Subtitle size="5">TWEETS
      <Title size="3">3,456</Title>
    </Subtitle>
  </Level.Item>
  <Level.Item>
    <Subtitle size="5">FOLLOWING
      <Title size="3">123</Title>
    </Subtitle>
  </Level.Item>
  <Level.Item>
    <Subtitle size="5">FOLLOWERS
      <Title size="3">456K</Title>
    </Subtitle>
  </Level.Item>
  <Level.Item>
    <Subtitle size="5">LIKES
      <Title size="3">789</Title>
    </Subtitle>
  </Level.Item>
</Level>
```
