import React from 'react'
import Header from './Header'

import Rebase from 're-base'
const base = Rebase.createClass('https://whiskey-notes.firebaseio.com')

const { any } = React.PropTypes

const App = React.createClass({
  propTypes: {
    children: any
  },

  getInitialState () {
    return {
      notes: []
    }
  },

  componentDidMount () {
    // Sync data from Firebase
    base.syncState('notes', {
      context: this,
      state: 'notes',
      asArray: true
    })
  },

  saveNote (note) {
    const { notes } = this.state

    if (note.id) {
      // If editing existing note
      notes[note.id] = note
    } else {
      // Otherwise, add it to notes list
      notes.push(note)
    }

    this.setState({
      notes: this.state.notes
    })
  },

  deleteNote (id) {
    const { notes } = this.state
    if (window.confirm('Are you sure you delete this note?')) {
      delete notes[id]

      this.setState({
        notes: notes
      })
    }
  },

  render () {
    return (
      <div>
        <Header />
        <main className='page'>
          {React.cloneElement(this.props.children, {
            notes: this.state.notes,
            saveNote: this.saveNote,
            deleteNote: this.deleteNote
          })}
        </main>
      </div>
    )
  }
})

module.exports = App
