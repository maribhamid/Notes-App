import React from 'react'

function Header({handleDarkMode}) {
  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Notes App</h1>
        <button
        onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
        className='text-blue-500 bg-white p-2 rounded-full cursor-pointer hover:scale-110'>Change Theme</button>
      </div>
    </div>
  )
}

export default Header
