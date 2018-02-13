import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Note from './components/Note/Note'
import NoteList from './components/NoteList/NoteList'
import About from './components/AboutWhiskey/AboutWhiskey'
import whiskeyNotes from './data'
import './App.css'

const emptyNote = {
  id: null,
  name: null,
  distiller: null,
  age: null,
  category: null,
  color: null,
  rating: null,
  country: null,
  tastingNotes: null
}

class App extends Component {
  render() {
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
