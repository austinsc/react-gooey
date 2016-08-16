> The inevitable HTML **table**, with special case cells.

## Modifiers

```hint|neutral
Add **borders** to all the cells.
```

```jsx
<Table bordered>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
    </tbody>
</Table>
```

```hint|neutral
Add **stripes** to the table.
```

```jsx
<Table striped>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Seven</td>
        <td>Eight</td>
      </tr>
    </tbody>
</Table>
```

```hint|neutral
Make the cells **narrower**.
```

```jsx
<Table narrow>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Seven</td>
        <td>Eight</td>
      </tr>
    </tbody>
</Table>
```

```hint|neutral
You can **combine** all three modifiers.
```

```jsx
<Table bordered striped narrow>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Seven</td>
        <td>Eight</td>
      </tr>
    </tbody>
</Table>
```
