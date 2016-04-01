import React from 'react'
import { Link } from 'react-router'
import { notes } from './data/notes'

const NotesList = React.createClass({
  render () {
    return (
      <ul className='notes-list'>
        {notes.map((note) => (
          <Link to={`/notes/${note.id}`} key={note.id}>
            <li className='notes-list__note'>{note.name} ({note.rating}/5)</li>
          </Link>
        ))}
      </ul>
    )
  }
})

module.exports = NotesList
