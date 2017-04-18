import React from 'react'

const Login = ({ signIn }) => (
  <article>
    <h2 className='page__title'>Login</h2>
    <p>To view your notes and add new ones, sign in to your account ↗</p>
  </article>
)

Login.propTypes = {
  signIn: React.PropTypes.func.isRequired
}

module.exports = Login
