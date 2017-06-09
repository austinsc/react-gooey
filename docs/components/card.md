An all-around flexible and composable component

* `<Card/>`: the main container
  * `<Card.Head/>`: a horizontal bar with a shadow
    * has prop icon
  * `<Card.Image/>`: a fullwidth container for a responsive image
  * `<Card.Content/>`: a multi-purpose container for any other element
  * `<Card.Foot/>`: a horizonal list of controls
 
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
          <Title size="4"> 
            John Smith 
            <Subtitle size="6"> 
              @johnsmith 
            </Subtitle>
          </Title>
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
  <Card.Head icon="angle-down">Component</Card.Head>
  <Card.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>#css</a> <a>#responsive</a> 
      <br/>
      <small>11:09 PM - 1 Jan 2016</small>
  </Card.Content>
  <Card.Foot>
    <a>Save</a>
    <a>Edit</a>
    <a>Delete</a>
  </Card.Foot>
</Card>
```

```jsx
<Card>
  <Card.Content>
    <Title size="3"> 
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
      <Subtitle size="5">
        Jeff Atwood
      </Subtitle>
    </Title>

  </Card.Content>
  <Card.Foot>
    <span>View on <a>Twitter</a></span>
    <span>Share on <a>Facebook</a></span>
  </Card.Foot>
</Card>
```
