> The classic **button**, in different colors, sizes, and states

```jsx
<div>
  <Button text='Button'/>
  <Button text='Light' color='light'/>
  <Button text='Dark' color='dark'/>
  <Button text='Primary' color='primary'/>
  <Button text='Info' color='info'/>
  <Button text='Success' color='success'/>
  <Button text='Warning' color='warning'/>
  <Button text='Danger' color='danger'/>
  <Button text='Link' color='link'/>
</div>
```

## Sizes

```jsx
<div>
  <Button text='Small' size='small'/>
  <Button text='Normal' size='normal'/>
  <Button text='Medium' size='medium'/>
  <Button text='Large' size='large'/>
</div>
```

## Styles

> Outlined

```jsx
<div>
  <Button text='Outlined' outlined/>
  <Button text='Outlined' color='primary' outlined/>
  <Button text='Outlined' color='info' outlined/>
  <Button text='Outlined' color='success' outlined/>
  <Button text='Outlined' color='danger' outlined/>
</div>
```

> Inverted (the text color becomes the background color, and vice-versa)

```jsx
<div>
  <Button text='Inverted' inverted/>
  <Button text='Inverted' color='primary' inverted/>
  <Button text='Inverted' color='info' inverted/>
  <Button text='Inverted' color='success' inverted/>
  <Button text='Inverted' color='danger' inverted/>
</div>
```

## States

> Loading

```jsx
<div>
  <Button text='Loading' loading/>
  <Button text='Loading' color='primary' loading/>
  <Button text='Loading' color='info'  loading/>
  <Button text='Loading' color='success' loading/>
  <Button text='Loading' color='warning' loading/>
  <Button text='Loading' color='danger' loading/>
</div>
```

> Active

```jsx
<div>
  <Button text='Active' active/>
  <Button text='Active' color='primary' active/>
  <Button text='Active' color='info'  active/>
  <Button text='Active' color='success' active/>
  <Button text='Active' color='warning' active/>
  <Button text='Active' color='danger' active/>
</div>
```

> Disabled

```jsx
<div>
  <Button text='Disabled' disabled/>
  <Button text='Disabled' color='primary' disabled/>
  <Button text='Disabled' color='info'  disabled/>
  <Button text='Disabled' color='success' disabled/>
  <Button text='Disabled' color='warning' disabled/>
  <Button text='Disabled' color='danger' disabled/>
</div>
```

> With Font-Awesome icons

```jsx
<div>
  <Button text='Github' icon='github'/>
  <Button text='Twitter' color='primary' icon='twitter'/>
  <Button text='Save' color='success' icon='check'/>
  <Button text='Delete' color='danger' icon='times' outlined/>
  <Button text='Disabled' color='warning' disabled/>
  <Button text='Disabled' color='danger' disabled/>
</div>
```

## Button Group
> If you want to **group** buttons together, wrap them in a `<ButtonGroup/>`:

```jsx
<ButtonGroup>
  <Button text='Save Changes' color='primary'/>
  <Button text='Cancel'/>
  <Button text='Delete Post' color='danger'/>
</ButtonGroup>
```

## Add-ons
> If you want to use buttons as **addons**, use the addons modifier on the `<ButtonGroup/>` container:

```jsx
<ButtonGroup addons>
  <Button text='Left' icon='align-left'/>
  <Button text='Center' icon='align-center'/>
  <Button text='Right' icon='align-right'/>
</ButtonGroup>
```


