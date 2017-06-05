> Simple responsive horizontal navigation **tabs**, with different styles

```props
```

**Tabs** require a `<Tabs/>` container and a `<Tabs.Item/>` component for each element.
  * `<Tabs.Item/>` has props **active**, 

The **default** tabs style has a single border at the bottom.

```jsx
<Tabs>
  <Tabs.Item text="Pictures" active />
  <Tabs.Item text="Music" />
  <Tabs.Item text="Videos" />
  <Tabs.Item text="Documents" />
</Tabs>
```

## Alignment
To align the tabs list, set the **alignment** prop on the `<Tabs/>` container:

```jsx
<Tabs alignment="centered">
  <Tabs.Item text="Pictures" active />
  <Tabs.Item text="Music" />
  <Tabs.Item text="Videos" />
  <Tabs.Item text="Documents" />
</Tabs>
```

```jsx
<Tabs alignment="right">
  <Tabs.Item text="Pictures" active />
  <Tabs.Item text="Music" />
  <Tabs.Item text="Videos" />
  <Tabs.Item text="Documents" />
</Tabs>
```

## Icons
To use an `<Icon/>` on the `<Tabs.Item/>`, use the **icon** prop:

```jsx
<Tabs alignment="centered">
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```

## Sizes

You can choose **3 additional sizes**: small, medium, and large.

```jsx
<Tabs size="small">
  <Tabs.Item text="Pictures" active />
  <Tabs.Item text="Music" />
  <Tabs.Item text="Videos" />
  <Tabs.Item text="Documents" />
</Tabs>
```

```jsx
<Tabs size="medium">
  <Tabs.Item text="Pictures" active />
  <Tabs.Item text="Music" />
  <Tabs.Item text="Videos" />
  <Tabs.Item text="Documents" />
</Tabs>
```

```jsx
<Tabs size="large">
  <Tabs.Item text="Pictures" active />
  <Tabs.Item text="Music" />
  <Tabs.Item text="Videos" />
  <Tabs.Item text="Documents" />
</Tabs>
```

## Styles
If you want a more classic style with **borders**, just append the `boxed` modifier.

```jsx
<Tabs boxed>
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```

If you want **mutually exclusive** tabs (like radio buttons where clicking one deselects all other ones), use the `toggle` modifier.

```jsx
<Tabs toggle>
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```

If you want the tabs to take up the whole width available, use `fullwidth`.

```jsx
<Tabs fullwidth>
  <Tabs.Item text="Left" icon="angle-left" />
  <Tabs.Item text="Up" icon="angle-up" />
  <Tabs.Item text="Right" icon="angle-right" />
</Tabs>
```

You can **combine** different modifiers. For example, you can have **centered boxed** tabs, or **fullwidth toggle** ones.

```jsx
<Tabs alignment="centered" boxed>
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```

```jsx
<Tabs toggle fullwidth>
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```

```jsx
<Tabs alignment="centered" boxed size="medium">
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```

```jsx
<Tabs toggle fullwidth size="large">
  <Tabs.Item text="Pictures" icon="image" active />
  <Tabs.Item text="Music" icon="music" />
  <Tabs.Item text="Videos" icon="film" />
  <Tabs.Item text="Documents" icon="file-text-o" />
</Tabs>
```
