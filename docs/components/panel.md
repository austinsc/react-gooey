A composable **panel**, for compact controls

The panel is a container for several types:

* `<Panel.Heading />` as the first child
* `<Panel.Tabs />` for navigation
* `<Panel.Block />` which can contain other elements
* `<Panel.Link />` which can contain an icon and/or text
* `<Panel.Checkbox />` which can contain text and an onChange function

```jsx
<div style={{backgroundColor: 'white'}}>
<Panel>
  <Panel.Heading>
    Repositories
  </Panel.Heading>
  <Panel.Block>
    <input className="input" type="text" placeholder="Search"/>
  </Panel.Block>
  <Panel.Tabs>
    <a className="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </Panel.Tabs>
  <Panel.Link text="react-gooey" icon="book" active />
  <Panel.Link text="marksheet" icon="book" />
  <Panel.Link text="minireset.css" icon="book" />
  <Panel.Link text="jgthms.github.io" icon="book" />
  <Panel.Link text="daniellowtw/infBoard" icon="code-fork" />
  <Panel.Link text="mojs" icon="code-fork" />
  <Panel.Checkbox text="Remember me" />
  <Panel.Block>
    <Button text="Reset all filters" color="primary" outlined className="is-fullwidth" />
  </Panel.Block>
</Panel>
</div>
```
