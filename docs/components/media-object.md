# Media Object
The famous `<MediaObject/>` prevalent in social media interfaces, but useful in any context

```props
```

The media object is a UI element perfect for **repeatable** and **nestable** content.

```jsx
<div>
  <MediaObject>
    <MediaObject.Left>
      <Image size='64x64' src='//placehold.it/128x128'/>
    </MediaObject.Left>
    <MediaObject.Content>
      <Content>
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </Content>
    </MediaObject.Content>
    <MediaObject.Right>
      <Delete />
    </MediaObject.Right>
  </MediaObject>
</div>
```

You can include any other ReactGooey element, like inputs, icons, buttons... or even a nav bar.

```jsx
<MediaObject>
  <MediaObject.Left>
    <Image size='64x64' src='//placehold.it/128x128'/>
  </MediaObject.Left>
  <MediaObject.Content>
    <p className="control">
      <textarea className="textarea" placeholder="Add a comment..."></textarea>
    </p>
    <br />
    <Level>
      <Level.Left>
        <Level.Item>
          <Button color='info' text='Post comment'/>
        </Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item>
          <Button color='info' outlined text='Press enter to submit'/>
        </Level.Item>
      </Level.Right>
    </Level>
  </MediaObject.Content>
</MediaObject>
```

-------------

## Nesting

You can nest media objects up to **3 levels** deep.

```jsx
<MediaObject>
  <MediaObject.Left>
    <Image size='64x64' src='//placehold.it/128x128'/>
  </MediaObject.Left>
  <MediaObject.Content>
    <Content>
      <p>
        <strong>Barbara Middleton</strong>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        <br />
        <small>
          <a>Like</a> · <a>Reply</a> · 2 hrs
        </small>
      </p>    
      <MediaObject>
        <MediaObject.Left>
          <Image size='64x64' src='//placehold.it/128x128'/>
        </MediaObject.Left>
        <MediaObject.Content>
          <Content>
            <p>
              <strong>Barbara Middleton</strong>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 2 hrs
              </small>
            </p>
          </Content>
        </MediaObject.Content>
      </MediaObject>
    </Content>
  </MediaObject.Content>
</MediaObject>
```
