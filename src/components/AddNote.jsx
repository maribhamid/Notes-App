import React from 'react'
import { useState } from 'react'

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
        setNoteText(event.target.value)
        }
    }
    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }
  return (
  <div className='flex-col bg-blue-100 p-10 rounded-lg shadow-md w-115 h-60 justify-between gap-3 m-2 flex relative'>
      <div>
        <textarea
          rows='5'
          cols='50'
          placeholder='Type to add a note...'
          white-space='pre-wrap'
          className='border-none bg-blue-100 resize-none w-full focus:outline-none'
            value={noteText}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className='flex justify-between absolute bottom-4 w-9/10 left-1/2 transform -translate-x-1/2'>
        <small>{characterLimit-noteText.length} remaining</small>
        <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-black hover:scale-110 transition-colors active:scale-150 cursor-pointer'
        onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
