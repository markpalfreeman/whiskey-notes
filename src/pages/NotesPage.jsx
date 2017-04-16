import React from 'react'
import NoteList from '../components/NoteList'
import { browserHistory } from 'react-router'

const { array, bool, element, func, object } = React.PropTypes

const NotesPage = React.createClass({
  propTypes: {
    children: element,
    location: object,
    params: object,
    notes: array,
    loading: bool,
    addNote: func.isRequired,
    saveNote: func.isRequired,
    deleteNote: func.isRequired,
    user: object
  },

  componentWillUpdate (nextProps) {
    if (!this.props.user || !nextProps.user) browserHistory.push('/login')
  },

  render () {
    return (
      <article>
        {!this.props.loading
          ? <NoteList {...this.props} />
          : <p>Loading...</p>}
      </article>
    )
  }
})

module.exports = NotesPage
