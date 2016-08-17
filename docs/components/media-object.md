> The famous `<MediaObject/>` prevalent in social media interfaces, but useful in any context
  
The media object is a UI element perfect for repeatable and nestable content.

```jsx
<MediaObject>
  <MediaObject left>
    <Image size='64x64' source='http://placehold.it/128x128'/>
  </MediaObject>
  <MediaObject content>
    <Content>
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </Content>
  </MediaObject>
  <MediaObject right>
    <Button className='delete'/>
  </MediaObject>
</MediaObject>
```

You can include any other ReactGooey element, like inputs, icons, buttons... or even a nav bar.

```jsx
<MediaObject>
  <MediaObject left>
    <Image size='64x64' source='http://placehold.it/128x128'/>
  </MediaObject>
  <MediaObject content>
    <p className="control">
      <textarea className="textarea" placeholder="Add a comment..."></textarea>
    </p>
    <Level>
      <LevelSection left>
        <LevelItem>
          <Button color='info' text='Post comment'/>
        </LevelItem>
      </LevelSection>
      <LevelSection right>
        <LevelItem>
          <Button color='info' outlined text='Press enter to submit'/>
        </LevelItem>
      </LevelSection>
    </Level>
  </MediaObject>
</MediaObject>
```

## Nesting

You can nest media objects up to **3 levels** deep.

```jsx
<MediaObject>
  <MediaObject left>
    <Image size='64x64' source='http://placehold.it/128x128'/>
  </MediaObject>
  <MediaObject content>
    <Content>
      <p>
        <strong>Barbara Middleton</strong>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
      <ButtonGroup>
        <Button color='link' text='Like'/>
        <Button color='link' text='Reply'/>
      </ButtonGroup>
      
      <MediaObject>
        <MediaObject left>
          <Image size='64x64' source='http://placehold.it/128x128'/>
        </MediaObject>
        <MediaObject content>
          <Content>
            <p>
              <strong>Barbara Middleton</strong>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
            <ButtonGroup>
              <Button color='link' text='Like'/>
              <Button color='link' text='Reply'/>
            </ButtonGroup>
          </Content>
        </MediaObject>
      </MediaObject>
    </Content>
  </MediaObject>
</MediaObject>
```
