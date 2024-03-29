import React from 'react'
import { Link } from 'react-router'
import RatingStars from './RatingStars'

const { object, func } = React.PropTypes

const NoteListItem = React.createClass({
  propTypes: {
    note: object,
    deleteNote: func
  },

  handleDeleteNote () {
    this.props.deleteNote(this.props.note.key)
  },

  render () {
    const { note } = this.props

    return (
      <li className='note-list__note'>
        <Link to={`/notes/${note.key}`} params={{note: note.key}} className='note-list__note__title'>{note.name}</Link>
        <div className='note-list__note__rating'>
          <RatingStars rating={note.rating} />
          <button onClick={this.handleDeleteNote} className='note-list__note__delete'>&times;</button>
        </div>
      </li>
    )
  }
})

module.exports = NoteListItem
