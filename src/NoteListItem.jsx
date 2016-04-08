import React from 'react'
import { Link } from 'react-router'

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
      <li className='notes-list__note'>
        <Link to={`/notes/${id}`}>{note.name} ({note.rating}/5)</Link>
        <button onClick={this.handleDeleteNote}>[ X ]</button>
      </li>
    )
  }
})

module.exports = NoteListItem
