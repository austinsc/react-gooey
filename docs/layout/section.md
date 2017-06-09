# Section
A simple container to divide your page into **sections**, like the one you're currently reading

```props
```

Use sections as **direct** children of body.

```jsx
<Section>
  <Container>
    <Title size="4">
      Section
    </Title>
    <Subtitle size="5">
      A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
    </Subtitle>
  </Container>
</Section>
``` 

You can use modifiers on the `size` prop to change the **spacing**.
```jsx
<div>
  <Section size="small">
      <Title size="4">
        Small Section
      </Title>
  </Section>
  <br />
  <Section size="normal">
      <Title size="4">
        Section
      </Title>
  </Section>
  <br />
  <Section size="medium">
      <Title size="4">
        Medium Section
      </Title>
  </Section>
  <br />
  <Section size="large">
      <Title size="4">
        Large Section
      </Title>
  </Section>
</div>
``` 
