import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handleSearchNote}) {
  return (
    <div>
      <div className='flex items-center bg-blue-100 rounded-lg shadow-md w-full  p-2 mb-4 relative'>
        <MdSearch size='1.3em' className='absolute   text-gray-900'/>
        <input type="text" 
        placeholder="Search notes..." 
        className='border-none bg-blue-100 focus:outline-none pl-10'
        onChange={(event)=>handleSearchNote(event.target.value)} />
      </div>
    </div>
  )
}

export default Search
