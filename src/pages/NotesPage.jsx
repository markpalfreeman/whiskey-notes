import React from 'react'

const { object, element, array, func } = React.PropTypes

const NotesPage = React.createClass({
  propTypes: {
    children: element,
    location: object,
    params: object,
    notes: array,
    addNote: func,
    deleteNote: func,
    saveNote: func
  },

  render () {
    const { location, params, notes, addNote, deleteNote, saveNote } = this.props
    let headerTitle = 'Notes'

    // This feels hacky
    if (location.pathname === '/notes/new') {
      headerTitle = 'New note:'
    } else if (params.id) {
      headerTitle = 'Edit note:'
    }

    return (
      <div>
        <h2>{headerTitle}</h2>
        {React.cloneElement(this.props.children, {
          notes: notes,
          addNote: addNote,
          deleteNote: deleteNote,
          saveNote: saveNote
        })}
      </div>
    )
  }
})

module.exports = NotesPage
