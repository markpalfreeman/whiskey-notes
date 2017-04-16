import React from 'react'
import { Link } from 'react-router'

const { func, object } = React.PropTypes

const Header = ({ signIn, signOut, user }) => (
  <header className='header'>
    <h1 className='header__logo'><Link to='/'>Whiskey Notes</Link></h1>
    <nav className='header__nav'>
      {user
        ? <div>
            <button className='header__auth-button' onClick={signOut}>Sign out</button>
            <Link to='/notes/new' params={{ path: 'new' }} className='header__nav__link'>+</Link>
          </div>
        : <button className='header__auth-button' onClick={signIn}>Sign in</button>}
    </nav>
  </header>
)

Header.propTypes = {
  signIn: func,
  signOut: func,
  user: object
}

export default Header
