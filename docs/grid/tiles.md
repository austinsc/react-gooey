# Tile
A **single tile** element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids

```props
```

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

```jsx|span-3
<Tile>
  <Notification color="primary">
    The magical tile element!
  </Notification>
</Tile>
```

Add tile elements that will distribute themselves **horizontally**:

```jsx|span-3
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
