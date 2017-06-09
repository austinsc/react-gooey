A **single tile** element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids

To build intricate 2-dimensional, you only need a **single element** - the tile:

```jsx
<Tile>
  {/* The magical tile element! */}
</Tile>
```

## Modifiers

The `<Tile/>` element has **16 modifiers**:

 - **3 contextual** modifiers
    + `ancestor`
    + `parent`
    + `child`
 - **1 directional** modifier
    + `vertical`
 - **12 horizontal size** modifiers
    + from `1` to `12`

    
## How it works: Nesting
 
Everything is a `<Tile/>`! To create a grid of tiles, you only need to **nest** `<Tile/>` elements.

Start with an **ancestor** tile that will wrap all other tiles:

```jsx
<Tile ancestor>
  <Tile vertical size="8">
    <Tile>
      <Tile parent vertical>
        <Tile child>
          <Notification color="primary">
            <Title size="3">Vertical...</Title>
            <Subtitle size="5">Top tile</Subtitle>
          </Notification>
        </Tile>
        <Tile child>
          <Notification color="warning">
            <Title size="3">...tiles</Title>
            <Subtitle size="5">Bottom tile</Subtitle>
          </Notification>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Notification color="info">
            <Title size="3">Middle tile</Title>
            <Subtitle size="5">With an image</Subtitle>
            <Image ratio="4by3" src='//placehold.it/640x480'/>
          </Notification>
        </Tile>
      </Tile>
    </Tile>
    <Tile parent>
        <Tile child>
          <Notification color="danger">
            <Title size="3">Wide title</Title>
            <Subtitle size="5">Aligned with the right title</Subtitle>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </Content>
          </Notification>
        </Tile>
      </Tile>
    </Tile>
    <Tile parent>
        <Tile child>
          <Notification color="success">
            <Content>
              <Title size="3">Tall title</Title>
              <Subtitle size="5">With even more content</Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
              Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
            </Content>            
          </Notification>
        </Tile>
    </Tile>
</Tile>
```

Add tile elements that will distribute themselves **horizontally**:

```jsx
<Tile ancestor>
  <Tile>
    <Notification color="info">
       Add content or other tiles
    </Notification>
  </Tile>
  <Tile>
    <Notification color="warning">
       Add content or other tiles
    </Notification>
  </Tile>
</Tile>
```

-------------

## Nesting requirements
3 levels deep at least
```hint
You can however nest tiles more deeply than that, and mix it up!
```

* `<Tile ancestor/>`
  * `<Tile parent/>`
    * `<Tile child/>`
