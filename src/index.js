require('./sass/app.sass')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import About from './pages/AboutPage'
import NotesPage from './pages/NotesPage'
import LoginPage from './pages/LoginPage'
import Note from './components/Note'
import FourOhFour from './pages/404'

const Index = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={NotesPage} />
      <Route path='about' component={About} />
      <Route path='notes' component={NotesPage} />
      <Route path='notes/:note' component={Note} />
      <Route path='login' component={LoginPage} />
      <Route path='*' component={FourOhFour} />
    </Route>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('root'))
