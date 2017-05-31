# Navigation Components
A responsive horizontal **nav bar** that can contain links, tabs, buttons, icons, and a logo

```jsx
<Nav>
  <NavSection alignment="left">
    <NavItem>
    
    </NavItem>
  </NavSection>
  <NavSection alignment="center">
    <NavItem>
      <Icon name="github"/>
      <Icon name="twitter"/>
    </NavItem>
  </NavSection>
  <NavSection alignment="right">
    <NavItem>
      Home
    </NavItem>
    <NavItem>
      Documentation
    </NavItem>
    <NavItem>
      Blog
    </NavItem>
    <NavItem>
      <Button icon="twitter" text="Tweet"/>
    </NavItem>
    <NavItem>
      <Button icon="download" text="Download" color="primary"/>
    </NavItem>
  </NavSection>

</Nav>
```