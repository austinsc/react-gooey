> An imposing **hero banner** to showcase something

```props
```

```jsx
<Hero>
  <Hero.Body>
    <Container>
      <Title>
        Hero title
      </Title>
      <Subtitle>
        Hero subtitle
      </Subtitle>
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
    </Title>
    <Subtitle>
      Primary subtitle
    </Subtitle>
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
      </Title>        
      <Subtitle>
        Info subtitle
      </Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="success">
    <Hero.Body>
    <Container>
      <Title>
        Success title
      </Title>        
      <Subtitle>
        Success subtitle
      </Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="warning">
    <Hero.Body>
    <Container>
      <Title>Warning title</Title>
      <Subtitle>Warning subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="danger">
    <Hero.Body>
    <Container>
      <Title>Danger title</Title>
      <Subtitle>Danger subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="light">
    <Hero.Body>
    <Container>
      <Title>Light title</Title>
      <Subtitle>Light Subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="dark">
    <Hero.Body>
    <Container>
      <Title>Dark title</Title>
      <Subtitle>Dark subtitle</Subtitle>
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
    <Title>Primary bold title</Title>
    <Subtitle>Primary bold subtitle</Subtitle>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<div>
  <Hero color="info" bold>
    <Hero.Body>
    <Container>
      <Title>Info bold title</Title>
      <Subtitle>Info bold subtitle </Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="success" bold>
    <Hero.Body>
    <Container>
      <Title>Success bold title</Title>
      <Subtitle>Success bold subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="warning" bold>
    <Hero.Body>
    <Container>
      <Title>Warning bold title</Title>
      <Subtitle>Warning bold subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="danger" bold>
    <Hero.Body>
    <Container>
      <Title>Danger bold title</Title>
      <Subtitle>Danger bold subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="light" bold>
    <Hero.Body>
    <Container>
      <Title>Light bold title</Title>
      <Subtitle>Light bold Subtitle</Subtitle>
    </Container>
    </Hero.Body>
  </Hero>
  <Hero color="dark" bold>
    <Hero.Body>
    <Container>
      <Title>Dark bold title</Title>
      <Subtitle>Dark bold subtitle</Subtitle>
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
    <Title>Medium title</Title>
    <Subtitle>Medium subtitle</Subtitle>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="info" size="large">
  <Hero.Body>
  <Container>
    <Title>Large title</Title>
    <Subtitle>Large subtitle</Subtitle>
  </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="success" size="fullheight">
  <Hero.Body>
  <Container>
    <Title>Full Height title</Title>
    <Subtitle>Full Height subtitle</Subtitle>
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
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
    </Container>
  </Hero.Body>
  <Hero.Foot>
    <Tabs>
        <Tabs.Item text="Overview" active />
        <Tabs.Item text="Modifiers" />
        <Tabs.Item text="Grid" />
        <Tabs.Item text="Elements" />
        <Tabs.Item text="Components" />
        <Tabs.Item text="Layout" />
    </Tabs>
  </Hero.Foot>
</Hero>
```
