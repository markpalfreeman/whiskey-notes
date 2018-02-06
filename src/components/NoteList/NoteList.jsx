import React from 'react'
import { Link } from 'react-router-dom'

function NoteList({ notes }) {
  return (
    <div>
      {notes.map(whiskey => (
        <Link to={`/note/${whiskey.id}`}>
          <div className="whiskey-card">
            <h3>{whiskey.name}</h3>
            <span className="whiskey-details">{whiskey.distiller}</span>
            <span className="whiskey-details">&#8226;</span>
            <span className="whiskey-details">{whiskey.category}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NoteList
