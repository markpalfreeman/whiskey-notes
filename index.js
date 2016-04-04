import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './src/App'
import About from './src/pages/About'
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
          <Route path='notes' component={NotesList}/>
          <Route path='notes/new' component={Note}/>
          <Route path='notes/:id' component={Note}/>
          <Route path='*' component={FourOhFour}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('app'))
