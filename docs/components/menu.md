# Menu Components

```jsx
<Menu>
  <MenuLabel text="General" />
  <MenuList>
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </MenuList>
  <MenuLabel text="Administration" />
  <MenuList>
    <li><a>Team Settings</a></li>
    <li>
      <a className="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </MenuList>
  <MenuLabel text="Administration" />
  <MenuList>
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </MenuList>
</Menu>

```
