import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header className='header'>
    <h1 className='header__logo'><Link to='/'>Whiskey Notes</Link></h1>
    <nav className='header__nav'>
      <Link to='/notes/new' params={{notePath: 'new'}} className='header__nav__link'>+</Link>
    </nav>
  </header>
)

export default Header
