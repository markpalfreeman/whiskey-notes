import React from 'react'

const Notes = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render () {
    return (
      <main>
        <h2>Notes</h2>
        {this.props.children}
      </main>
    )
  }
})

module.exports = Notes
