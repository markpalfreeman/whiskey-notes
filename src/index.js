require('./sass/app.sass')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import About from './pages/AboutPage'
import NotesPage from './pages/NotesPage'
import NoteList from './components/NoteList'
import Note from './components/Note'
import FourOhFour from './pages/404'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Rubik:700']
  }
})

const Index = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={NoteList}/> {/* Fix to share layout across app but drop in page content */}
          <Route path='about' component={About}/>
          <Route path='notes' component={NotesPage}>
            <IndexRoute component={NoteList}/>
            <Route path=':notePath' component={Note}/>
          </Route>
          <Route path='*' component={FourOhFour}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('root'))
