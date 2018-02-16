import React from 'react'

class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.note
    this.updateNote = this.updateNote.bind(this)
  }

  updateNote(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  render() {
    const categories = ['Bourbon', 'Rye', 'American Single Malt']
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
          <select name="category" value={this.state.category} onChange={this.updateNote}>
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
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
