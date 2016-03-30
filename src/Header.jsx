import React from 'react'
import { Link } from 'react-router'

const Header = React.createClass({
  render () {
    return (
      <header className='main-header'>
        <h1 className='logo'><Link to='/'>Whiskey Notes</Link></h1>
        <Link to='/notes/new'>New Note</Link><br/>
        <Link to='/notes'>Notes</Link><br/>
        <Link to='/about'>About</Link><br/>
        <Link to='/asdf'>404</Link>
      </header>
    )
  }
})

module.exports = Header
