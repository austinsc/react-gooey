# Level Components
A multi-purpose **horizontal level**, which can contain almost any other element.

`<Level/>`: main container
  * `<LevelSection/>`
    * `left`
    * `right`
      * `<LevelItem/>` for each individual element

In a `<LevelItem/>`, you can then insert almost anything you want: 
a title, a button, a text input, or just simple text. 
No matter what elements you put inside a `<Level/>`, they will always be **vertically centered**.


```jsx
<Level>
  <LevelSection left>
    <LevelItem>
      <Title size="5" subtitle><strong>123</strong> posts</Title>
    </LevelItem>
    <LevelItem>
      Item Two
    </LevelItem>
    <LevelItem>
      Item Three
    </LevelItem>
  </LevelSection>
  
  <LevelSection right>
    <LevelItem>
      Item Four
    </LevelItem>
    <LevelItem>
      Item Five
    </LevelItem>
    <LevelItem>
      Item Six
    </LevelItem>
  </LevelSection>
</Level>
```
