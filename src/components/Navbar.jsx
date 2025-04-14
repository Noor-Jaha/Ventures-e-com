import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> E-Commerce </a>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit">Add filter</button>
  </form>
</div>
</nav>
  )
}

export default Navbar