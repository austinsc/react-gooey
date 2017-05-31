> A container for **responsive images**

```props
```

Because images can take a few seconds to load (or not at all), use the `<Image/>` container to specify a **precisely sized** container so that your layout isn"t broken because of image loading or image errors.

```jsx
<Image size="128x128" src="http://placehold.it/128x128"/>
```

## Fixed square images

There are **7** dimensions to choose from, useful for **avatars**.

```jsx
<div>
  <Image size="16x16" src="http://placehold.it/16x16"/>
  <br />
  <Image size="24x24" src="http://placehold.it/24x24"/>
  <br />
  <Image size="32x32" src="http://placehold.it/32x32"/>
  <br />
  <Image size="48x48" src="http://placehold.it/48x48"/>
  <br />
  <Image size="64x64" src="http://placehold.it/64x64"/>
  <br />
  <Image size="96x96" src="http://placehold.it/96x96"/>
  <br />
  <Image size="128x128" src="http://placehold.it/128x128"/>
</div>
```

## Retina images

Because the `<Image/>` is fixed in size, you can use an image that is **twice as big**. So for example, in a `128x128` container, you can use a `256x256` image, but resized to **128x128** pixels.

```jsx
<div>
  <Image size="128x128" src="http://placehold.it/256x256"/>
</div>
```

## Responsive images with ratios

If you don"t know the exact dimensions but know the **ratio** instead, you can use one of the **5 ratio modifers**:

```jsx|span-4
<div>
  <Image ratio="square" src="http://placehold.it/256x256"/>
  <br />
  <Image ratio="1by1" src="http://placehold.it/480x480"/>
  <br />
  <Image ratio="4by3" src="http://placehold.it/640x480"/>
  <br />
  <Image ratio="3by2" src="http://placehold.it/480x320"/>
  <br />
  <Image ratio="16by9" src="http://placehold.it/640x360"/>
  <br />
  <Image ratio="2by1" src="http://placehold.it/640x320"/>
</div>
```

The `<Image/>` container will take up the **whole width** while maintaining the perfect ratio.
