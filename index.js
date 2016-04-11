import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './src/App'
import About from './src/pages/About'
import NotesPage from './src/pages/NotesPage'
import NotesList from './src/NotesList'
import Note from './src/Note'
import FourOhFour from './src/404'

const Index = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={NotesList}/> {/* need to fix this to default to NotesList view */}
          <Route path='about' component={About}/>
          <Route path='notes' component={NotesPage}>
            <IndexRoute component={NotesList}/>
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
