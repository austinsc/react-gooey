An imposing **hero banner** to showcase something

```jsx
<Hero>
  <Hero.Body>
    <Container>
      <Title>
        Hero title
        <Subtitle>
          Hero subtitle
        </Subtitle>
      </Title>
    </Container>
  </Hero.Body>
</Hero>
```

## Colors
As with buttons, you can choose one of the **7 different colors**

```jsx
<Hero color="primary">
  <Hero.Body>
  <Container>
    <Title>
      Primary title
      <Subtitle>
        Primary subtitle
      </Subtitle>
    </Title>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<div>
  <Hero color="info">
    <Hero.Body>
    <Container>
      <Title>
        Info title        
        <Subtitle>
          Info subtitle
        </Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="success">
    <Hero.Body>
    <Container>
      <Title>
        Success title 
        <Subtitle>
          Success subtitle
        </Subtitle>
      </Title>       
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="warning">
    <Hero.Body>
    <Container>
      <Title>
        Warning title
        <Subtitle>Warning subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="danger">
    <Hero.Body>
    <Container>
      <Title>
        Danger title
        <Subtitle>Danger subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="light">
    <Hero.Body>
    <Container>
      <Title>
        Light title
        <Subtitle>Light Subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="dark">
    <Hero.Body>
    <Container>
      <Title>
        Dark title
        <Subtitle>Dark subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
</div>
```

## Gradients
By adding the `bold` modifier, you can generate a subtle **gradient**

```jsx
<Hero color="primary" bold>
  <Hero.Body>
  <Container>
    <Title>
      Primary bold title
      <Subtitle>Primary bold subtitle</Subtitle>
    </Title>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<div>
  <Hero color="info" bold>
    <Hero.Body>
    <Container>
      <Title>
        Info bold title
        <Subtitle>Info bold subtitle </Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="success" bold>
    <Hero.Body>
    <Container>
      <Title>
        Success bold title
        <Subtitle>Success bold subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="warning" bold>
    <Hero.Body>
    <Container>
      <Title>
        Warning bold title
        <Subtitle>Warning bold subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="danger" bold>
    <Hero.Body>
    <Container>
      <Title>
        Danger bold title
        <Subtitle>Danger bold subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="light" bold>
    <Hero.Body>
    <Container>
      <Title>
        Light bold title
        <Subtitle>Light bold Subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="dark" bold>
    <Hero.Body>
    <Container>
      <Title>
        Dark bold title
        <Subtitle>Dark bold subtitle</Subtitle>
      </Title>
    </Container>
    </Hero.Body>
  </Hero>
</div>
```

## Sizes
You can have even more imposing banners by using one of **3 different sizes**

```jsx
<Hero color="primary" size="medium">
  <Hero.Body>
  <Container>
    <Title>
      Medium title
      <Subtitle>Medium subtitle</Subtitle>
    </Title>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="info" size="large">
  <Hero.Body>
  <Container>
    <Title>
      Large title
      <Subtitle>Large subtitle</Subtitle>
    </Title>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="success" size="fullheight">
  <Hero.Body>
  <Container>
    <Title>
      Full Height title
      <Subtitle>Full Height subtitle</Subtitle>
    </Title>
  </Container>
  </Hero.Body>
</Hero>
```

## Full height hero
And vertically centered

You can split the hero in **3 vertical parts**:

  * `<Hero/>`
  * `<Hero.Head/>` (always at the top)
  * `<Hero.Body/>` (always vertically centered)
  * `<Hero.Foot/>` (always at the bottom)

```jsx
<Hero color="primary" size="medium">
  <Hero.Head>
    <Nav>
      <Container>
        <Nav.Left>
        
        </Nav.Left>
        <Nav.Toggle/>
        <Nav.Right>
          <Nav.Link active>
            Home
          </Nav.Link>
          <Nav.Link>
            Examples
          </Nav.Link>      
          <Nav.Link>
            Documentation
          </Nav.Link>
          <Nav.Item>
            <Button icon="github" text="Download"/>
          </Nav.Item>
        </Nav.Right>
      </Container>
    </Nav>
   </Hero.Head>
  <Hero.Body>
    <Container className="has-text-centered">
      <Title>
        Title
        <Subtitle>Subtitle</Subtitle>
      </Title>
    </Container>
  </Hero.Body>
  <Hero.Foot>
    <Tabs>
        <Tab active >Overview</Tab>
        <Tab>Modifiers</Tab>
        <Tab>Grid</Tab>
        <Tab>Elements</Tab>
        <Tab>Components</Tab>
        <Tab>Layout</Tab>
    </Tabs>
  </Hero.Foot>
</Hero>
```
