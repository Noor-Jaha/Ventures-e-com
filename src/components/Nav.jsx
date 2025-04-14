import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';



const Nav = () => {
  return (
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <NavLink class="nav-link active" aria-current="page" to={'/'} >
          <AddHomeIcon />
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to={'/products'}>ProductList</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to={'/cartlist'} >
          <Badge badgeContent={4} color="primary">
            <ShoppingCartCheckoutIcon />
          </Badge>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link disabled" to={'/signup'} tabindex="-1" aria-disabled="true">
          <LoginIcon  />
          Signup</NavLink>
      </li>
      <li class="nav-item">
          <NavLink class="nav-link disabled" to={'/logout'} tabindex="-1" aria-disabled="true">
            < LogoutIcon />
            Logout</NavLink>
        </li>
    </ul>

  )
}

export default Nav
