> A container for **responsive images**

Because images can take a few seconds to load (or not at all), use the `<Image/>` container to specify a **precisely sized** container so that your layout isn't broken because of image loading or image errors.

```jsx
<Image size='128x128' source='http://placehold.it/128x128'/>
```

## Fixed square images

There are **7** dimensions to choose from, useful for **avatars**.

```jsx
<div>
  <Image size='16x16' source='http://placehold.it/16x16'/>
  <Image size='24x24' source='http://placehold.it/24x24'/>
  <Image size='32x32' source='http://placehold.it/32x32'/>
  <Image size='48x48' source='http://placehold.it/48x48'/>
  <Image size='64x64' source='http://placehold.it/64x64'/>
  <Image size='96x96' source='http://placehold.it/96x96'/>
  <Image size='128x128' source='http://placehold.it/128x128'/>
</div>
```

## Retina images

Because the `<Image/>` is fixed in size, you can use an image that is **twice as big**. So for example, in a `128x128` container, you can use a `256x256` image, but resized to **128x128** pixels.

```jsx
<div>
  <Image size='128x128' source='http://placehold.it/256x256'/>
</div>
```

## Responsive images with ratios

If you don't know the exact dimensions but know the **ratio** instead, you can use one of the **5 ratio modifers**:

```jsx|span-4
<div>
  <Image ratio='square' source='http://placehold.it/256x256'/>
  <Image size='1by1' source='http://placehold.it/480x480'/>
  <Image size='4by3' source='http://placehold.it/640x480'/>
  <Image size='3by2' source='http://placehold.it/480x320'/>
  <Image size='16by9' source='http://placehold.it/640x360'/>
  <Image size='2by1' source='http://placehold.it/640x320'/>
</div>
```

The `<Image/>` container will take up the **whole width** while maintaining the perfect ratio.
