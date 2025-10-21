import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Notes = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='flex-col bg-blue-300 p-10 rounded-lg shadow-md w-115 h-60 justify-between gap-3 m-2 flex whitespace-pre-wrap'>
      <span>{text}</span>
      <div className='flex justify-between items-center'>
        <small>{date}</small>
        <MdDeleteForever 
        onClick={() => handleDeleteNote(id)} 
        className='delete-icon hover:text-red-500 hover:scale-125 transition-transform active:scale-190 cursor-pointer' size='1.3em'/>
      </div>
    </div>
  )
}

export default Notes
