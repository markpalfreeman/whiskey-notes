import React from 'react'

const { object, element, array, func } = React.PropTypes

const NotesPage = React.createClass({
  propTypes: {
    children: element,
    location: object,
    params: object,
    notes: array,
    saveNote: func,
    deleteNote: func
  },

  render () {
    const { location, params, notes, saveNote, deleteNote } = this.props
    let headerTitle = 'Notes'

    // Sorta hacky?
    if (location.pathname === '/notes/new') {
      headerTitle = 'New note:'
    } else if (params.id) {
      headerTitle = 'Edit note:'
    }

    return (
      <article>
        <h2 className='page__title'>{headerTitle}</h2>
        {React.cloneElement(this.props.children, {
          notes: notes,
          saveNote: saveNote,
          deleteNote: deleteNote
        })}
      </article>
    )
  }
})

module.exports = NotesPage
