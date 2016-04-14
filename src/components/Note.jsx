import React from 'react'
import { browserHistory } from 'react-router'
// import FlavorChart from './FlavorChart'
import RatingStars from './RatingStars'

const { object, array, func } = React.PropTypes
const ratings = ['Clear', 'Straw', 'Honey', 'Gold', 'Amber', 'Caramel', 'Mahogany']
// const flavorChartOptions = {}

const Note = React.createClass({
  propTypes: {
    params: object,
    location: object,
    notes: array,
    saveNote: func
  },

  getInitialState () {
    return this.getCurrentNote(this.props) || {}
  },

  componentWillReceiveProps (nextProps) {
    this.state = this.getCurrentNote(nextProps)
    this.setState(this.state)
  },

  getCurrentNote (props) {
    let note = {
      name: '',
      distiller: '',
      age: '',
      origin: '',
      price: '',
      date: new Date().toJSON().slice(0, 10),
      rating: null,
      color: null,
      notes: '',
      flavor: {}
    }

    if (props.params.notePath === 'new') {
      return note
    } else {
      note = props.notes[this.props.params.notePath]
      return note
    }
  },

  editField (event) {
    this.setState({ [event.target.name]: event.target.value })
  },

  handleSave (event) {
    event.preventDefault()
    this.props.saveNote(this.state)
    browserHistory.push('/notes')
  },

  render () {
    return (
      <div className=''>
        <form name='whiskey-note' className='whiskey-note' ref='whiskey-note' onSubmit={this.handleSave}>
          <label htmlFor=''>Whiskey Name</label>
          <input name='name' type='text' ref='name' onChange={this.editField} value={this.state.name}/><br/>
          <label htmlFor=''>Distiller</label>
          <input name='distiller' type='text' ref='distiller' onChange={this.editField} value={this.state.distiller}/><br/>
          <label htmlFor=''>Age</label>
          <input name='age' type='text' ref='age' onChange={this.editField} value={this.state.age}/><br/>
          <label htmlFor=''>Origin</label>
          <input name='origin' type='text' ref='origin' onChange={this.editField} value={this.state.origin}/><br/>
          <label htmlFor=''>Price</label>
          <input name='price' type='text' ref='price' onChange={this.editField} value={this.state.price}/><br/>
          <label htmlFor=''>Date Sampled</label>
          <input name='date' type='date' ref='date' onChange={this.editField} value={this.state.date}/><br/>
          <label htmlFor=''>Rating: <RatingStars rating={this.state.rating}/></label>
          <input name='rating' type='range' min='1' max='5' ref='rating' onChange={this.editField} value={this.state.rating}/><br/>
          <label htmlFor=''>Color: <span className=''>{ratings[this.state.color]}</span></label>
          <input name='color' type='range' className='whiskey-note__color' min='0' max='6' ref='color' onChange={this.editField} value={this.state.color}/>

          <label htmlFor=''>Notes</label>
          <textarea name='notes' ref='notes' onChange={this.editField} value={this.state.notes} rows='5'/><br/>

          {/*
          <label htmlFor=''>Flavor <em>(Experimental &amp; broken!)</em></label>
          <FlavorChart data={this.state.flavor} options={flavorChartOptions}/>
          */}

          <footer>
            <button type='submit'>Save</button>
          </footer>
        </form>

        {/* <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre> */}
      </div>
    )
  }
})

module.exports = Note
