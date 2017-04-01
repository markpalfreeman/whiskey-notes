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
    const { notes, saveNote, deleteNote } = this.props

    // // Sorta hacky?
    // if (location.pathname === '/notes/new') {
    //   headerTitle = 'New note:'
    // }

    return (
      <article>
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
