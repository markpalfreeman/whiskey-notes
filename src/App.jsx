import React from 'react'
import Header from './Header'
import { notes } from './data/notes'

const { any } = React.PropTypes

const App = React.createClass({
  propTypes: {
    children: any
  },

  getInitialState () {
    return {
      notes: notes
    }
  },

  addNote (note) {
    this.state.notes.push(note)
    this.setState({
      notes: this.state.notes
    })
  },

  deleteNote (noteId) {
    let {notes} = this.state

    notes = notes.filter((n) => (
      // Get new array without ID match
      noteId !== n.id
    ))

    this.setState({
      notes: notes
    })
  },

  render () {
    return (
      <div>
        <Header/>
        {React.cloneElement(this.props.children, {
          notes: this.state.notes,
          addNote: this.addNote,
          deleteNote: this.deleteNote
        })}
      </div>
    )
  }
})

module.exports = App
