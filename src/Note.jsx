import React from 'react'
import { notes } from './data/notes' // hack until we have real data

const { object } = React.PropTypes

const Note = React.createClass({
  propTypes: {
    params: object
  },

  getInitialState () {
    const note = this.getCurrentNote(this.props.params.id) || {}

    return {
      name: note.name || '',
      distiller: note.distiller || '',
      age: note.age || '',
      origin: note.origin || '',
      price: note.price || '',
      date: note.date || null,
      rating: note.rating || null,
      notes: note.notes || '',
      color: note.color || ''
      // flavor: note.flavor || {}
    }
  },

  getCurrentNote (id) {
    return notes.filter((note) => (
      id === note.id
    ))[0]
  },

  editField (event) {
    this.setState({ [event.target.name]: event.target.value })
  },

  render () {
    return (
      <div className=''>
        <form name='whiskey-note' className='whiskey-note'>
          <label htmlFor=''>Whiskey Name</label>
          <input name='name' type='text' ref='name' onChange={this.editField} value={this.state.name}/>
          <label htmlFor=''>Distiller</label>
          <input name='distiller' type='text' ref='distiller' onChange={this.editField} value={this.state.distiller}/>
          <label htmlFor=''>Age</label>
          <input name='age' type='text' ref='age' onChange={this.editField} value={this.state.age}/>
          <label htmlFor=''>Origin</label>
          <input name='origin' type='text' ref='origin' onChange={this.editField} value={this.state.origin}/>
          <label htmlFor=''>Price</label>
          <input name='price' type='text' ref='price' onChange={this.editField} value={this.state.price}/>
          <label htmlFor=''>Date Sampled</label>
          <input name='date' type='date' ref='date' onChange={this.editField} value={this.state.date}/>
          <label htmlFor=''>Rating</label>
          <input name='rating' type='range' min='1' max='5' ref='rating' onChange={this.editField} value={this.state.rating}/>

          <label htmlFor=''>Notes</label>
          <textarea name='notes' ref='notes' onChange={this.editField} value={this.state.notes}/>

          <label htmlFor=''>Color Meter</label>
          <input name='color' type='range' min='1' max='5' ref='color' onChange={this.editField} value={this.state.color}/>

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

          <button type='submit'>Save</button>
        </form>

        <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
      </div>
    )
  }
})

module.exports = Note
