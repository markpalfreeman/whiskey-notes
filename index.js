require('./src/sass/app.sass')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './src/App'
import About from './src/pages/AboutPage'
import NotesPage from './src/pages/NotesPage'
import NoteList from './src/NoteList'
import Note from './src/Note'
import FourOhFour from './src/404'
import WebFont from 'webfontloader'

const Index = React.createClass({
  componentDidMount () {
    WebFont.load({
      google: {
        families: ['Rubik:700']
      }
    })
  },

  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={NoteList}/> {/* Fix to share layout across app but drop in page content */}
          <Route path='about' component={About}/>
          <Route path='notes' component={NotesPage}>
            <IndexRoute component={NoteList}/>
            <Route path='new' component={Note}/>
            <Route path=':id' component={Note}/>
          </Route>
          <Route path='*' component={FourOhFour}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('root'))
