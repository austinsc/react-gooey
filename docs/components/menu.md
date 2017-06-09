# Menu
A simple **menu**, for any type of vertical navigation

```props
```

```jsx
<Menu>
  <Menu.Label>General</Menu.Label>
  <Menu.List>
    <Menu.Link>Dashboard</Menu.Link>
    <Menu.Link>Customers</Menu.Link>
  </Menu.List>
  <Menu.Label>Administration</Menu.Label>
  <Menu.List>
    <Menu.Link>Team Settings</Menu.Link>
    <Menu.Link active>Manage Your Team</Menu.Link>
      <Menu.List>
        <Menu.Link>Members</Menu.Link>
        <Menu.Link>Plugins</Menu.Link>
        <Menu.Link>Add a member</Menu.Link>
      </Menu.List>
    <Menu.Link>Invitations</Menu.Link>
    <Menu.Link>Cloud Storage Environment Settings</Menu.Link>
    <Menu.Link>Authentication</Menu.Link>
  </Menu.List>
  <Menu.Label>Transactions</Menu.Label>
  <Menu.List>
    <Menu.Link>Payments</Menu.Link>
    <Menu.Link>Transfers</Menu.Link>
    <Menu.Link>Balance</Menu.Link>
  </Menu.List>
</Menu>

```
