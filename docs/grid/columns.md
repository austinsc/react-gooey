A simple way to build responsive columns

To build a **grid**, just:
 * Add a `<Columns />` container
 * Add as many `<Column />` elements as you want

Each column will have an **equal width**, no matter the number of columns.
```jsx
<Columns>
  <Column>
    <Notification color="info">
      First column
    </Notification>
  </Column>
  <Column>
    <Notification color="success">
      Second column
    </Notification>
  </Column>
  <Column>
    <Notification color="warning">
      Third column
    </Notification>
  </Column>
  <Column>
    <Notification color="danger">
      Fourth column
    </Notification>
  </Column>
</Columns>
```

-------------

## Sizes

If you want to change the **size** of a single column, you can use one the following options:

 - `three-quarters`
 - `two-thirds`
 - `half`
 - `one-third`
 - `one-quarter`
 - As well as any number between `1` and `12`
 
The other columns will fill up the **remaining** space automatically.

```jsx
<div>
  <Columns>
    <Column size="three-quarters">
      <Notification color="info">
        three-quarters
      </Notification>
    </Column>
    <Column>
      <Notification color="warning">
        Auto
      </Notification>
    </Column>
    <Column>
      <Notification color="danger">
        Auto
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size="two-thirds">
      <Notification color="info">
        two-thirds
      </Notification>
    </Column>
    <Column>
      <Notification color="warning">
        Auto
      </Notification>
    </Column>
    <Column>
      <Notification color="danger">
        Auto
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size="half">
      <Notification color="info">
        half
      </Notification>
    </Column>
    <Column>
      <Notification color="warning">
        Auto
      </Notification>
    </Column>
    <Column>
      <Notification color="danger">
        Auto
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size="one-third">
      <Notification color="info">
        one-third
      </Notification>
    </Column>
    <Column>
      <Notification color="success">
        Auto
      </Notification>
    </Column>
    <Column>
      <Notification color="warning">
        Auto
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size="one-quarter">
      <Notification color="info">
        one-quarter
      </Notification>
    </Column>
    <Column>
      <Notification color="success">
        Auto
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size="2"><Notification color="info">2</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="3"><Notification color="info">3</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="4"><Notification color="info">4</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="5"><Notification color="info">5</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="6"><Notification color="info">6</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="7"><Notification color="info">7</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="8"><Notification color="info">8</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="9"><Notification color="info">9</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="10"><Notification color="info">10</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
    <Column><Notification color="success">1</Notification></Column>
  </Columns>
  <Columns>
    <Column size="11"><Notification color="info">11</Notification></Column>
    <Column><Notification color="warning">1</Notification></Column>
  </Columns>
</div>
```

-------------

## Offset

While you can use empty columns (like `<Column />`) to create horizontal space before and after other `<Column />` elements, you can also use the offset prop.

```jsx
<div>
  <Columns>
    <Column size="half" offset="one-quarter">
      <Notification color="info">
        <p>size: half</p>
        <p>offset: one-quarter</p>
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size={4} offset={8}>
      <Notification color="info">
        <p>size: 4</p>
        <p>offset: 8</p>
      </Notification>
    </Column>
  </Columns>
  <Columns>
    <Column size="11" offset="1">
      <Notification color="info">
        <p>size: 11</p>
        <p>offset: 1</p>
      </Notification>
    </Column>
  </Columns>
</div>
```

-------------

## Responsiveness

By default, columns are only activated from **tablet** onwards. This means columns are stacked on top of each other on **mobile**.

If you want columns to work on **mobile too**, just **enable** the `mobile` prop on the `<Column />` element:

```jsx
<Columns mobile>
  <Column>
    <Notification color="info">
      1
    </Notification>
  </Column>
  <Column>
    <Notification color="success">
      2
    </Notification>
  </Column>
  <Column>
    <Notification color="warning">
      3
    </Notification>
  </Column>
  <Column>
    <Notification color="danger">
      4
    </Notification>
  </Column>
</Columns>
```

```hint
If you want to see the difference, resize your browser and see _when_ the columns are stacked and when they are horizontally distributed.
```

If you _only_ want columns on **desktop**, just **enable** the desktop prop on the `<Column />` element:

```jsx
<Columns desktop>
  <Column>
    <Notification color="info">
      1
    </Notification>
  </Column>
  <Column>
    <Notification color="success">
      2
    </Notification>
  </Column>
  <Column>
    <Notification color="warning">
      3
    </Notification>
  </Column>
  <Column>
    <Notification color="danger">
      4
    </Notification>
  </Column>
</Columns>
```

-------------

### Different sizes per breakpoint

You can define a column **size** for each viewport size: **mobile**, **tablet**, and **desktop**.

```jsx
<Columns>
  <Column size={{mobile: 'half', tablet: 'one-third', desktop: 'one-quarter'}}>
    <Notification color="info">
      <p>mobile: half</p>
      <p>tablet: one-third</p>
      <p>desktop: one-quarter</p>
    </Notification>
  </Column>
  <Column>
    <Notification color="warning">
      Auto
    </Notification>
  </Column>
  <Column>
    <Notification color="success">
      Auto
    </Notification>
  </Column>
  <Column>
    <Notification color="warning">
      Auto
    </Notification>
  </Column>
  <Column>
    <Notification color="success">
      Auto
    </Notification>
  </Column>
</Columns>
```

```hint
If you want to see how the breakpoints are applied, resize your browser window and see how the same column varies in width at each breakpoint.
```

-------------

## Nesting
You can **nest** columns to have more flexibility in your design. You only need to follow this structure:

* `<Columns />`: top-level columns container
  * `<Column />`
    * `<Columns />`: nested columns
      * `<Column />` and so on…
      
The difference with multiline columns is the **order** in the HTML code: all the **blue** columns appear before the **red** ones. Resize to a narrower viewport to see the result.

```jsx
<Columns >
  <Column color="info">
    <Notification color="info">First column</Notification>    
    <Columns mobile>
      <Column>
        <Notification color="info">First nested column</Notification>    
      </Column>
      <Column>
        <Notification color="info">Second nested column</Notification>    
      </Column>
    </Columns>
  </Column>
  <Column color="danger">
    <Notification color="danger">Second column</Notification>    
    <Columns mobile>
      <Column size="half">
        <Notification color="danger">50%</Notification>    
      </Column>
      <Column>
        <Notification color="danger">Auto</Notification>    
      </Column>
      <Column>
        <Notification color="danger">Auto</Notification>    
      </Column>
    </Columns>
  </Column>
  
</Columns>
```

-------------

## Multiline

Whenever you want to start a new line, you can close a `<Columns />` container and start a new one. But you can also **enable** the multiline prop and add more `<Column />` elements than would fit in a single row.

```jsx
<Columns mobile multiline>
  <Column size="one-quarter">
    <Notification color="info">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="success">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="warning">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="danger">
      one-quarter
    </Notification>
  </Column>
  <Column size="half">
    <Notification color="info">
      half
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="success">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="warning">
      one-quarter
    </Notification>
  </Column>  
  <Column size="one-quarter">
    <Notification color="danger">
      one-quarter
    </Notification>
  </Column>
  <Column>
    <Notification color="info">
      Auto
    </Notification>
  </Column>
</Columns>
```


-------------

## Gapless

If you want to remove the **space** between the `<Column />` components, **enable** the `gapless` prop on the `<Columns />` container:

```jsx
<Columns gapless>
  <Column>
    <Notification color="info">
      First column
    </Notification>
  </Column>
  <Column>
    <Notification color="success">
      Second column
    </Notification>
  </Column>
  <Column>
    <Notification color="warning">
      Third column
    </Notification>
  </Column>
  <Column>
    <Notification color="danger">
      Fourth column
    </Notification>
  </Column>
</Columns>
```

You can also combine it with the `multiline` modifier:

```jsx
<Columns mobile multiline gapless>
  <Column size="one-quarter">
    <Notification color="info">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="success">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="warning">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="danger">
      one-quarter
    </Notification>
  </Column>
  <Column size="half">
    <Notification color="info">
      half
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="success">
      one-quarter
    </Notification>
  </Column>
  <Column size="one-quarter">
    <Notification color="warning">
      one-quarter
    </Notification>
  </Column>  
  <Column size="one-quarter">
    <Notification color="danger">
      one-quarter
    </Notification>
  </Column>
  <Column>
    <Notification color="info">
      Auto
    </Notification>
  </Column>
</Columns>
```


-------------

## Narrow

If you want a `<Column />` to only take the space it needs, **enable** the `narrow` prop. The other `<Column />` elements will fill up the remaining space.
