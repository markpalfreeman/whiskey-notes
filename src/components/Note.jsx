import React from 'react'
import { browserHistory } from 'react-router'

const { object, array, func } = React.PropTypes
const ratings = ['Clear', 'Straw', 'Honey', 'Gold', 'Amber', 'Caramel', 'Mahogany']

const Note = React.createClass({
  propTypes: {
    params: object,
    location: object,
    notes: array,
    saveNote: func
  },

  getInitialState () {
    let note = {
      id: null,
      name: '',
      distiller: '',
      age: '',
      origin: '',
      price: '',
      date: null,
      rating: null,
      notes: '',
      color: null
    }
    if (!this.props.params.id) {
      return note
    } else {
      note = this.props.notes[this.props.params.id] || {}
      note.id = this.props.params.id
      return note
    }
  },

  componentWillReceiveProps (nextProps) {
    if (this.props.params.id) {
      this.setState(nextProps.notes[this.props.params.id])
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
          <label htmlFor=''>Rating: <span className=''>{this.state.rating}</span></label>
          <input name='rating' type='range' min='1' max='5' ref='rating' onChange={this.editField} value={this.state.rating}/><br/>
          <label htmlFor=''>Color: <span className=''>{ratings[this.state.color]}</span></label>
          <input name='color' type='range' className='whiskey-note__color' min='0' max='6' ref='color' onChange={this.editField} value={this.state.color}/>

          <label htmlFor=''>Notes</label>
          <textarea name='notes' ref='notes' onChange={this.editField} value={this.state.notes}/><br/>

          {/*
          <label htmlFor=''>Tasting [Wheel]</label>
          <input name='flavor.darkFruit' type='range' min='1' max='5' ref='flavor.darkFruit' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.citrusFruit' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.floral' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.spicy' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.herbal' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.malty' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.toffee' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.woody' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.tannic' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.char' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.sweet' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.body' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.legs' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.balance' onBlur={this.editField}/>
          <input type='range' min='1' max='5' ref='flavor.linger' onBlur={this.editField}/>
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
