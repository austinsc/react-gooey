# Card
An all-around flexible and composable component

```props
```

`<Card/>`: the main container
  * `<Card.Header/>`: a horizontal bar with a shadow
    * has props text and icon
  * `<Card.Image/>`: a fullwidth container for a responsive image
  * `<Card.Content/>`: a multi-purpose container for any other element
  * `<Card.Footer/>`: a horizonal list of controls
 
```jsx
<Card>
  <Card.Image>
    <Image ratio="4by3" src="//placehold.it/1280x960"/>
  </Card.Image>
  <Card.Content>
    <MediaObject>
      <MediaObject.Left>
        <Image size='64x64' src='//placehold.it/128x128'/>
      </MediaObject.Left>
      <MediaObject.Content>
          <Title size="4"> John Smith </Title>
          <Subtitle size="6"> @johnsmith </Subtitle>
      </MediaObject.Content>
    </MediaObject>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>#css</a> <a>#responsive</a> 
      <br/>
      <small>11:09 PM - 1 Jan 2016</small>
    </Content>
  </Card.Content>
</Card>
```

```jsx
<Card>
  <Card.Header text="Component" icon="angle-down"/>
  <Card.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>#css</a> <a>#responsive</a> 
      <br/>
      <small>11:09 PM - 1 Jan 2016</small>
  </Card.Content>
  <Card.Footer>
  <a>Save</a>
  <a>Edit</a>
  <a>Delete</a>
  </Card.Footer>
</Card>
```

```jsx
<Card>
  <Card.Content>
    <Title size="3"> 
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </Title>
    <Subtitle size="5">
      Jeff Atwood
    </Subtitle>
  </Card.Content>
  <Card.Footer>
  <span>View on <a>Twitter</a></span>
  <span>Share on <a>Facebook</a></span>
  </Card.Footer>
</Card>
```
