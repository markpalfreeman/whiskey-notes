import React from 'react'
import { Link } from 'react-router'
import RatingStars from './RatingStars'

/*
 * USAGE:
 * <NotesList notes={data.notes}/>
 */

const { object, func, number } = React.PropTypes

const NoteListItem = React.createClass({
  propTypes: {
    note: object,
    id: number,
    deleteNote: func
  },

  handleDeleteNote () {
    this.props.deleteNote(this.props.id)
  },

  render () {
    const { note, id } = this.props

    return (
      <li className='note-list__note'>
        <Link to={`/notes/${id}`} className='note-list__note__title'>{note.name}</Link> <RatingStars rating={note.rating}/>
        <button onClick={this.handleDeleteNote} className='note-list__note__delete'>&times;</button>
      </li>
    )
  }
})

module.exports = NoteListItem
