import React from 'react'
import WebFont from 'webfontloader'
import { browserHistory } from 'react-router'
import Header from './Header'
import database from '../firebase'

const { any } = React.PropTypes

const App = React.createClass({
  propTypes: {
    children: any
  },

  getInitialState () {
    return {
      notes: null,
      loading: true,
      user: null
    }
  },

  componentWillMount () {
    WebFont.load({
      google: {
        families: ['Rubik:700']
      }
    })

    database.authGetOAuthRedirectResult('google', (error, result) => {
      if (error) console.log('Unable to authenticate user:', error)
      if (result.user) {
        this.setState({
          user: result.user,
          loading: false
        })
      }
    })
  },

  componentDidMount () {
    // Check for logged-in user and attach notes to state
    database.onAuth((user) => {
      if (user) {
        this.setState({ user })

        this.ref = database.syncState(`users/${user.uid}/notes`, {
          context: this,
          state: 'notes',
          asArray: true,
          then () {
            this.setState({ loading: false })
          }
        })
        browserHistory.push('/')
      } else {
        // If user was logged out, reflect on state
        this.setState({ user: null })
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

  signIn () {
    this.setState({ loading: true })
    browserHistory.push('/')
    database.authWithOAuthRedirect('google', (error, user) => {
      if (error) console.log('Unable to authenticate user:', error)
    })
  },

  signOut () {
    database.unauth()
    this.setState({ user: null })
    browserHistory.push('/')
  },

  render () {
    const { notes, loading, user } = this.state
    const { addNote, saveNote, deleteNote, signIn, signOut } = this

    return (
      <div>
        <Header signIn={signIn} signOut={signOut} user={user} />
        <main className='page'>
          {React.cloneElement(this.props.children, {
            loading,
            notes,
            addNote,
            saveNote,
            deleteNote,
            signIn,
            signOut,
            user
          })}
        </main>
      </div>
    )
  }
})

module.exports = App
