> React-gooey is compatible with **Font Awesome** icons

```props
```

Because the icons can take a few seconds to load, and because you want control over the space the icons will take, you can use `<Icon/>`:

```jsx
<Icon name="home"/>
```

The `<Icon/>` container will take up exactly **24 x 24 pixels**. The icon itself is sized at **21px**.

## Sizes

Font Awesome icons use a font-size of **28px** by default, and are best rendered when using **multiples of 7**.

The `<Icon/>` container is always slightly bigger than the font-size used:
```jsx
<div>
  <Icon name="home" size="small"/>
  <Icon name="home" size="medium"/>
  <Icon name="home"/>
</div>
```
