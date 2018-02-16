import React from 'react'
import { Link } from 'react-router-dom'

function NoteList({ notes }) {
  return (
    <div>
      {notes.map(whiskey => (
        <Link to={`/note/${whiskey.id}`} key={whiskey.id}>
          <div>
            <h3>{whiskey.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NoteList
