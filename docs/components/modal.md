A classic **modal** overlay, in which you can include any content you want

```jsx
state: {show: false}
---
<div>
    <ModalCard active={state && state.show} onClose={() => setState({show: false})} hideCloseButton>
      <MediaObject>
        <MediaObject.Left>
          <Image size='64x64' src='//placehold.it/128x128'/>
        </MediaObject.Left>
        <MediaObject.Content>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, 
              eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio 
              quis feugiat facilisis.
            </p>
          </Content>
        </MediaObject.Content>
    </MediaObject>
  </ModalCard>
  <Button onClick={() => setState({show: true})}>
    Launch Modal
  </Button>
</div>
```

-------------

## Image Modal
Because a modal can contain anything you want, you can very simply use it to build an image gallery for example:
```jsx
state: {show: false}
---
<div>
  <ModalCard active={state && state.show} onClose={() => setState({show: false})} hideCloseButton>
    <Image src="//placehold.it/1280x960.png"/>
  </ModalCard>
  <Button onClick={() => setState({show: true})}>
    Launch Image Modal
  </Button>
</div>
```

-------------

## Modal Card
If you want a more classic modal, with a head, a body and a foot, specify the title and footer.

```jsx
state: {show: false}
---
<div>
  <ModalCard title="Modal Title" color="primary" active={state && state.show} onClose={() => setState({show: false})} footer={[
               (<Button key="save" text="Save Changes" color="success" />), 
               (<Button key="cancel" text="Cancel" />)
             ]}>
    <p>
      Here is some content in the modal body! 
    </p>
  </ModalCard>
  <Button onClick={() => setState({show: true})}>
    Launch Modal
  </Button>
</div>
```
