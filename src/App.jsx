import React from 'react'
import Header from './Header'

const { any } = React.PropTypes

const App = React.createClass({
  propTypes: {
    children: any
  },

  render () {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App
