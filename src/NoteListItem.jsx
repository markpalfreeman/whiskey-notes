import React from 'react'
import { Link } from 'react-router'

/*
 * USAGE:
 * <NotesList notes={data.notes}/>
 */

const { object, func } = React.PropTypes

const NotesList = React.createClass({
  propTypes: {
    note: object,
    deleteNote: func
  },

  handleDeleteNote () {
    this.props.deleteNote(this.props.note.id)
  },

  render () {
    const { note } = this.props

    return (
      <li className='notes-list__note'>
        <Link to={`/notes/${note.id}`}>{note.name} ({note.rating}/5)</Link>
        <button onClick={this.handleDeleteNote}>[ X ]</button>
      </li>
    )
  }
})

module.exports = NotesList
