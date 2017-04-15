import React from 'react'
import NoteListItem from './NoteListItem'

const { array, func } = React.PropTypes

const NotesList = React.createClass({
  propTypes: {
    notes: array,
    deleteNote: func
  },

  render () {
    const { notes, deleteNote } = this.props

    return (
      <ul className='note-list'>
        {notes.map((note, index) => (
          <NoteListItem note={note} deleteNote={deleteNote} id={index} key={index} />
        ))}
      </ul>
    )
  }
})

module.exports = NotesList
