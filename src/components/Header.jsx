import React from 'react'
import { Link } from 'react-router'

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <h1 className='header__logo'><Link to='/'>Whiskey Notes</Link></h1>
        <nav className='header__nav'>
          <Link to='/notes/new' params={{notePath: 'new'}} className='header__nav__link'>+</Link>
          {/* <Link to='/notes' className='header__nav__link'>Notes</Link>
          <Link to='/about' className='header__nav__link'>About</Link> */}
        </nav>
      </header>
    )
  }
})

module.exports = Header
