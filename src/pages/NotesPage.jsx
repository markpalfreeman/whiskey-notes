import React from 'react'

const { object, element, array, func } = React.PropTypes

const NotesPage = React.createClass({
  propTypes: {
    children: element,
    location: object,
    params: object,
    notes: array,
    addNote: func.isRequired,
    saveNote: func.isRequired,
    deleteNote: func.isRequired
  },

  render () {
    const { notes, addNote, saveNote, deleteNote } = this.props

    return (
      <article>
        {React.cloneElement(this.props.children, {
          notes: notes,
          addNote: addNote,
          saveNote: saveNote,
          deleteNote: deleteNote
        })}
      </article>
    )
  }
})

module.exports = NotesPage
