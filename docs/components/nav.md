A responsive horizontal **nav bar** that can contain links, tabs, buttons, icons, or a logo

```jsx
<Nav>
  <Nav.Left>
    <Nav.Item>
      <Image size="24x24" src={logo} />
      <Title size="5" heading style={{marginLeft: '.25rem'}}>
        Gooey
      </Title>
    </Nav.Item>
  </Nav.Left>
  <Nav.Center>
    <Nav.Item>
      <Icon name="github"/>
      <Icon name="twitter"/>
    </Nav.Item>
  </Nav.Center>
  <Nav.Right>
    <Nav.Item>Home</Nav.Item>
    <Nav.Item>Documentation</Nav.Item>
    <Nav.Item>Blog</Nav.Item>
    <Nav.Item>
      <Button icon="twitter" text="Tweet"/>
    </Nav.Item>
    <Nav.Item>
      <Button icon="download" text="Download" color="primary"/>
    </Nav.Item>
  </Nav.Right>
</Nav>
```

* The `<Nav/>` container can have a shadow by adding the **shadow** modifier
* The `<Nav.Item/>` can become active by adding the **active** modifier
* The `<Nav.Item/>` can become a tab by adding the **tab** modifier

```jsx
<Nav shadow>
  <Container>
    <Nav.Left>
      <Nav.Item>
        <Image size="24x24" src={logo} />
        <Title size="5" style={{marginLeft: '.25rem'}}>
          GOOEY
        </Title>
      </Nav.Item>
    </Nav.Left>
    <Nav.Toggle/>
    <Nav.Right menu>
      <Nav.Link tab active>Home</Nav.Link>
      <Nav.Link tab>Features</Nav.Link>
      <Nav.Link tab>Pricing</Nav.Link>
      <Nav.Link tab>About</Nav.Link>
    </Nav.Right>
  </Container>
</Nav>
```
