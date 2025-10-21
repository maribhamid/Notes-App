import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='flex flex-wrap justify-center'>
        {notes.map(note => (
          <Notes id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
        ))}
        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList

