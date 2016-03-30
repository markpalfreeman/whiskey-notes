import React from 'react'

const { object } = React.PropTypes

const Note = React.createClass({
  propTypes: {
    params: object
  },

  render () {
    return (
      <h2>Note: {this.props.params.id}</h2>
    )
  }
})

module.exports = Note
