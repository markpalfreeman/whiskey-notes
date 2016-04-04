import React from 'react'
import NoteListItem from './NoteListItem'

/*
 * USAGE:
 * <NotesList notes={data.notes}/>
 */

const { array, func } = React.PropTypes

const NotesList = React.createClass({
  propTypes: {
    notes: array,
    deleteNote: func
  },

  render () {
    const { notes, deleteNote } = this.props

    return (
      <ul className='notes-list'>
        {notes.map((note) => (
          <NoteListItem note={note} deleteNote={deleteNote} key={note.id}/>
        ))}
      </ul>
    )
  }
})

module.exports = NotesList
