import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './src/App'
import About from './src/About'
import Notes from './src/Notes'
import Note from './src/Note'
import FourOhFour from './src/404'

const Index = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Notes}/>
          <Route path='about' component={About}/>
          <Route path='notes'>
            <IndexRoute component={Notes}/>
            <Route path='new' component={Note}/>
            <Route path=':id' component={Note}/>
          </Route>
          <Route path='*' component={FourOhFour}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('app'))
