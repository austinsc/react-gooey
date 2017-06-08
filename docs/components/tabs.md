# Tabs
Simple responsive horizontal navigation **tabs**, with different styles

```props
```

**Tabs** require a `<Tabs/>` container and a `<Tab/>` component for each element.
  * `<Tab/>` has props **active**, 

The **default** tabs style has a single border at the bottom.

```jsx
<Tabs>
  <Tab text="Pictures" active />
  <Tab text="Music" />
  <Tab text="Videos" />
  <Tab text="Documents" />
</Tabs>
```

## Alignment
To align the tabs list, set the **alignment** prop on the `<Tabs/>` container:

```jsx
<Tabs alignment="centered">
  <Tab text="Pictures" active />
  <Tab text="Music" />
  <Tab text="Videos" />
  <Tab text="Documents" />
</Tabs>
```

```jsx
<Tabs alignment="right">
  <Tab text="Pictures" active />
  <Tab text="Music" />
  <Tab text="Videos" />
  <Tab text="Documents" />
</Tabs>
```

## Icons
To use an `<Icon/>` on the `<Tab/>`, use the **icon** prop:

```jsx
<Tabs alignment="centered">
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```

## Sizes

You can choose **3 additional sizes**: small, medium, and large.

```jsx
<Tabs size="small">
  <Tab text="Pictures" active />
  <Tab text="Music" />
  <Tab text="Videos" />
  <Tab text="Documents" />
</Tabs>
```

```jsx
<Tabs size="medium">
  <Tab text="Pictures" active />
  <Tab text="Music" />
  <Tab text="Videos" />
  <Tab text="Documents" />
</Tabs>
```

```jsx
<Tabs size="large">
  <Tab text="Pictures" active />
  <Tab text="Music" />
  <Tab text="Videos" />
  <Tab text="Documents" />
</Tabs>
```

## Styles
If you want a more classic style with **borders**, just append the `boxed` modifier.

```jsx
<Tabs boxed>
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```

If you want **mutually exclusive** tabs (like radio buttons where clicking one deselects all other ones), use the `toggle` modifier.

```jsx
<Tabs toggle>
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```

If you want the tabs to take up the whole width available, use `fullwidth`.

```jsx
<Tabs fullwidth>
  <Tab text="Left" icon="angle-left" />
  <Tab text="Up" icon="angle-up" />
  <Tab text="Right" icon="angle-right" />
</Tabs>
```

You can **combine** different modifiers. For example, you can have **centered boxed** tabs, or **fullwidth toggle** ones.

```jsx
<Tabs alignment="centered" boxed>
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```

```jsx
<Tabs toggle fullwidth>
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```

```jsx
<Tabs alignment="centered" boxed size="medium">
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```

```jsx
<Tabs toggle fullwidth size="large">
  <Tab text="Pictures" icon="image" active />
  <Tab text="Music" icon="music" />
  <Tab text="Videos" icon="film" />
  <Tab text="Documents" icon="file-text-o" />
</Tabs>
```
