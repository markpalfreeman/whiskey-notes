import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Note from './components/Note/Note'
import NoteList from './components/NoteList/NoteList'
import About from './components/AboutWhiskey/AboutWhiskey'
import firebase from './firebase'
import './App.css'

const emptyNote = {
  date: '',
  id: '',
  name: '',
  distiller: '',
  age: '',
  category: '',
  color: '',
  rating: '',
  country: '',
  notes: ''
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whiskeyNotes: []
    }
  }

  componentWillMount() {
    this.ref = firebase.syncState('notes', {
      context: this,
      state: 'whiskeyNotes',
      asArray: true
    })
  }

  componentWillUnmount() {
    firebase.removeBinding(this.ref)
  }

  render() {
    const { whiskeyNotes } = this.state

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <NoteList notes={whiskeyNotes} />} />
          <Route path="/new" render={() => <Note note={emptyNote} />} />
          <Route
            path="/note/:id"
            render={({ match }) => (
              <Note note={whiskeyNotes.find(note => note.id === +match.params.id)} />
            )}
          />
          <Route path="/about-whiskey" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
