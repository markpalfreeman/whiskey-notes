import React from 'react'
import WebFont from 'webfontloader'
import Header from './Header'

import database from '../firebase.js'

const { any } = React.PropTypes

const App = React.createClass({
  propTypes: {
    children: any
  },

  getInitialState () {
    return {
      notes: [],
      loading: true
    }
  },

  componentWillMount () {
    WebFont.load({
      google: {
        families: ['Rubik:700']
      }
    })
  },

  componentDidMount () {
    // Sync data from Firebase (store as ref to unbind)
    this.ref = database.syncState('notes', {
      context: this,
      state: 'notes',
      asArray: true,
      then () {
        this.setState({ loading: false })
      }
    })
  },

  componentWillUnmount () {
    database.removeBinding(this.ref)
  },

  addNote (note) {
    const notes = this.state.notes.concat([note])
    this.setState({ notes })
  },

  saveNote (note) {
    const { notes } = this.state
    notes[note.key] = note
    this.setState({ notes })
  },

  deleteNote (key) {
    const { notes } = this.state
    if (window.confirm('Are you sure you delete this note?')) {
      delete notes[key]

      this.setState({ notes })
    }
  },

  render () {
    return (
      <div>
        <Header />
        <main className='page'>
          {!this.state.loading && React.cloneElement(this.props.children, {
            notes: this.state.notes,
            addNote: this.addNote,
            saveNote: this.saveNote,
            deleteNote: this.deleteNote
          })}
          {this.state.loading && 'Loading your notes...'}
        </main>
      </div>
    )
  }
})

module.exports = App
