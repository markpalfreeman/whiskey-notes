import React from 'react'

function Note({ note }) {
  return (
    <form onSubmit="">
      <label>
        Name:
        <input type="text" value={`${note.name}`} />
      </label>
      <label>
        Distiller:
        <input type="text" value={`${note.distiller}`} />
      </label>
      <label>
        Age:
        <input type="text" value={`${note.age}`} />
      </label>
      <label>
        Category:
        <select>
          <option>{note.category}</option>
        </select>
      </label>
      <label>
        Color:
        <input type="text" value={`${note.color}`} />
      </label>
      <label>
        Country:
        <input type="text" value={`${note.country}`} />
      </label>
      <label>
        Rating:
        <input type="number" value={`${note.rating}`} />
      </label>
      <label>
        Tasting Notes:
        <textarea cols="30" rows="10" value={`${note.tastingNotes}`} />
      </label>
    </form>
  )
}

export default Note
