A multi-purpose **horizontal level**, which can contain almost any other element.

* `<Level/>`: main container
  * `<Level.Left/>` for left section
  * `<Level.Right/>` for right section
      * `<Level.Item/>` for each individual element (`div` tag)
      * `<Level.Link/>` for each individual element (`a` tag)

In a `<Level.Item/>`, you can then insert almost anything you want: 
a title, a button, a text input, or just simple text. 

No matter what elements you put inside a `<Level/>`, they will always be **vertically centered**.


```jsx
<Level>
  <Level.Left>
    <Level.Item>
      <Subtitle size="5"><strong>123</strong> posts</Subtitle>
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

-------------

## Centered Level
If you want a **centered** level, you can use as many `<Level.Item/>` as you want, as long as they are direct children of the `<Level/>` container.

```jsx
<Level className="has-text-centered">
  <Level.Item>
    <Subtitle size="5" heading>
      Tweets
      <Title size="3">3,456</Title>
    </Subtitle>
  </Level.Item>
  <Level.Item>
    <Subtitle size="5" heading>
      Following
      <Title size="3">123</Title>
    </Subtitle>
  </Level.Item>
  <Level.Item>
    <Subtitle size="5" heading>
      Followers
      <Title size="3">456K</Title>
    </Subtitle>
  </Level.Item>
  <Level.Item>
    <Subtitle size="5" heading>
      Likes
      <Title size="3">789</Title>
    </Subtitle>
  </Level.Item>
</Level>
```
