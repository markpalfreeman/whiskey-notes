import React from 'react'

class Note extends React.Component {
  constructor(props) {
    super(props)
    const { note } = this.props
    this.state = {
      id: note.id,
      name: note.name,
      distiller: note.distiller,
      age: note.age,
      category: note.category,
      color: note.color,
      rating: note.rating,
      country: note.country,
      tastingNotes: note.tastingNotes
    }

    this.updateNote = this.updateNote.bind(this)
  }

  updateNote(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.updateNote} />
        </label>
        <label>
          Distiller:
          <input
            type="text"
            name="distiller"
            value={this.state.distiller}
            onChange={this.updateNote}
          />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={this.state.age} onChange={this.updateNote} />
        </label>
        <label>
          Category:
          <select name="category" onChange={this.updateNote}>
            <option value={this.state.category}>{this.state.category}</option>
          </select>
        </label>
        <label>
          Color:
          <input type="text" name="color" value={this.state.color} onChange={this.updateNote} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={this.state.country} onChange={this.updateNote} />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" value={this.state.rating} onChange={this.updateNote} />
        </label>
        <label>
          Tasting Notes:
          <textarea
            cols="30"
            rows="10"
            name="tastingNotes"
            value={this.state.tastingNotes}
            onChange={this.updateNote}
          />
        </label>
      </form>
    )
  }
}

export default Note
